import 'mocha';

import { expect, use } from 'chai';
import jsonschema from 'chai-json-schema';

import { WillDisappearEvent } from '@/Events/Streamdeck/Sent';
import { WillDisappearType } from '@/StreamdeckTypes/Sent';

use(jsonschema);

describe('WillDisappearEvent test', () => {
  it('validates the event against the json schema', () => {
    const event = new WillDisappearEvent('action', 'context');
    expect(JSON.parse(JSON.stringify(event))).to.be.jsonSchema(WillDisappearType);
  });
  it('returns the right default values for the event', () => {
    const event = new WillDisappearEvent('action312', 'context312');
    const parse: WillDisappearType = JSON.parse(JSON.stringify(event));
    expect(parse.action).to.equal('action312');
    expect(parse.context).to.equal('context312');
    expect(parse.event).to.equal('willDisappear');
    expect(parse.payload.coordinates.column).to.equal(1);
    expect(parse.payload.coordinates.row).to.equal(1);
    expect(parse.payload.isInMultiAction).to.be.false;
  });
  it('returns the right values for the changed options', () => {
    const event = new WillDisappearEvent('action312', 'context312', {
      column: 3,
      device: 'lala',
      isInMultiAction: true,
      row: 4,
      settings: { bar: 'baz', foo: true },
    });
    const parse: WillDisappearType = JSON.parse(JSON.stringify(event));
    expect(parse.payload.coordinates.column).to.equal(3);
    expect(parse.payload.coordinates.row).to.equal(4);
    expect(parse.payload.isInMultiAction).to.be.true;
    expect((parse.payload.settings as Record<string, boolean>).foo).to.be.true;
    expect((parse.payload.settings as Record<string, string>).bar).to.equal('baz');
  });
});
