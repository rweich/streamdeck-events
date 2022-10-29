import 'mocha';

import { expect, use } from 'chai';
import jsonschema from 'chai-json-schema';

import { KeyDownEvent } from '@/Events/Streamdeck/Sent';
import { KeyDownEventType } from '@/StreamdeckTypes/Sent';

use(jsonschema);

describe('KeyDownEvent test', () => {
  it('validates the event against the json schema', () => {
    const event = new KeyDownEvent('action', 'context');
    expect(JSON.parse(JSON.stringify(event))).to.be.jsonSchema(KeyDownEventType);
  });
  it('returns the right default values for the event', () => {
    const event = new KeyDownEvent('action312', 'context312');
    const parse: KeyDownEventType = JSON.parse(JSON.stringify(event));
    expect(parse.action).to.equal('action312');
    expect(parse.context).to.equal('context312');
    expect(parse.event).to.equal('keyDown');
    expect(parse.payload.coordinates.column).to.equal(1);
    expect(parse.payload.coordinates.row).to.equal(1);
    expect(parse.payload.isInMultiAction).to.be.false;
    expect((parse.payload as { state?: number }).state).to.be.undefined;
    expect((parse.payload as { userDesiredState?: number }).userDesiredState).to.be.undefined;
  });
  it('returns the right values for the changed options', () => {
    const event = new KeyDownEvent('action312', 'context312', {
      column: 4,
      device: 'lala',
      isInMultiAction: true,
      row: 2,
      settings: { bar: 'baz', foo: true },
      state: 1,
      userDesiredState: 0,
    });
    const parse: KeyDownEventType = JSON.parse(JSON.stringify(event));
    expect(parse.payload.coordinates.column).to.equal(4);
    expect(parse.payload.coordinates.row).to.equal(2);
    expect(parse.payload.isInMultiAction).to.be.true;
    expect((parse.payload.settings as Record<string, boolean>).foo).to.be.true;
    expect((parse.payload.settings as Record<string, string>).bar).to.equal('baz');
    expect((parse.payload as { state?: number }).state).to.equal(1);
    expect((parse.payload as { userDesiredState?: number }).userDesiredState).to.equal(0);
  });
});
