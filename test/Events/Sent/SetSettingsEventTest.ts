import 'mocha';

import { expect, use } from 'chai';

import SetSettingsEvent from '@/Events/Sent/SetSettingsEvent';
import { SetSettingsSchema } from './types';
import jsonschema from 'chai-json-schema';

use(jsonschema);

describe('SetSettingsEventTest test', () => {
  it('validates the event against the json schema', () => {
    const event = new SetSettingsEvent('context', { foo: 'bar' });
    expect(JSON.parse(JSON.stringify(event))).to.be.jsonSchema(SetSettingsSchema);
  });
  it('returns the right values for the event', () => {
    const event = new SetSettingsEvent('context', { foo: 'bar' });
    expect(JSON.parse(JSON.stringify(event)).context).to.equal('context');
    expect(JSON.parse(JSON.stringify(event)).payload.foo).to.equal('bar');
  });
});
