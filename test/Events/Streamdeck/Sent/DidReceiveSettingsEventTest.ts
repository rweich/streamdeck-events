import 'mocha';

import { expect, use } from 'chai';
import jsonschema from 'chai-json-schema';

import { DidReceiveSettingsEvent } from '@/Events/Streamdeck/Sent';
import { DidReceiveSettingsType } from '@/StreamdeckTypes/Sent';

use(jsonschema);

describe('DidReceiveSettingsEvent test', () => {
  it('validates the event against the json schema', () => {
    const event = new DidReceiveSettingsEvent('fooaction', 'foocontext');
    expect(JSON.parse(JSON.stringify(event))).to.be.jsonSchema(DidReceiveSettingsType);
  });
  it('returns the right default values for the event', () => {
    const event = new DidReceiveSettingsEvent('fooaction', 'foocontext');
    const parse: DidReceiveSettingsType = JSON.parse(JSON.stringify(event));
    expect(parse.action).to.equal('fooaction');
    expect(parse.context).to.equal('foocontext');
    expect(parse.event).to.equal('didReceiveSettings');
    expect(parse.payload.coordinates.column).to.equal(1);
    expect(parse.payload.coordinates.row).to.equal(1);
    expect(parse.payload.isInMultiAction).to.be.false;
  });
  it('returns the right values for the changed options', () => {
    const event = new DidReceiveSettingsEvent('fooaction', 'foocontext', {
      column: 13,
      device: 'foo',
      isInMultiAction: true,
      row: 34,
      settings: { bar: 'baz', foo: true },
    });
    const parse: DidReceiveSettingsType = JSON.parse(JSON.stringify(event));
    expect(parse.device).to.equal('foo');
    expect(parse.payload.coordinates.column).to.equal(13);
    expect(parse.payload.coordinates.row).to.equal(34);
    expect(parse.payload.isInMultiAction).to.be.true;
    expect((parse.payload.settings as Record<string, boolean>).foo).to.be.true;
    expect((parse.payload.settings as Record<string, string>).bar).to.equal('baz');
  });
});
