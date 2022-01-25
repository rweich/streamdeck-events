import 'mocha';

import { expect, use } from 'chai';
import jsonschema from 'chai-json-schema';

import SetSettingsEvent from '@/Events/Sent/SetSettingsEvent';
import { SetSettingsType } from '@/StreamdeckTypes/Received';

use(jsonschema);

describe('SetSettingsEventTest test', () => {
  it('validates the event against the json schema', () => {
    const event = new SetSettingsEvent('context', { foo: 'bar' });
    expect(JSON.parse(JSON.stringify(event))).to.be.jsonSchema(SetSettingsType);
  });
  it('returns the right values for the event', () => {
    const event = new SetSettingsEvent('context', { foo: 'bar' });
    expect(JSON.parse(JSON.stringify(event)).context).to.equal('context');
    expect(JSON.parse(JSON.stringify(event)).payload.foo).to.equal('bar');
  });
});
