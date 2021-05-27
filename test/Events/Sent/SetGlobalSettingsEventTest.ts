import 'mocha';

import { expect, use } from 'chai';

import SetGlobalSettingsEvent from '@/Events/Sent/SetGlobalSettingsEvent';
import { SetGlobalSettingsType } from '@/StreamdeckTypes/Received';
import jsonschema from 'chai-json-schema';

use(jsonschema);

describe('SetGlobalSettingsEventTest test', () => {
  it('validates the event against the json schema', () => {
    const event = new SetGlobalSettingsEvent('context', { foo: 'bar' });
    expect(JSON.parse(JSON.stringify(event))).to.be.jsonSchema(SetGlobalSettingsType);
  });
  it('returns the right values for the event', () => {
    const event = new SetGlobalSettingsEvent('context', { foo: 'bar' });
    expect(JSON.parse(JSON.stringify(event)).context).to.equal('context');
    expect(JSON.parse(JSON.stringify(event)).payload.foo).to.equal('bar');
  });
});
