import 'mocha';

import { expect, use } from 'chai';

import GetSettingsEvent from '../../src/outgoing/GetSettingsEvent';
import { GetSettingsSchema } from './types';
import jsonschema from 'chai-json-schema';

use(jsonschema);

describe('GetSettingsEventTest test', () => {
  it('validates the event against the json schema', () => {
    const event = new GetSettingsEvent('context');
    expect(JSON.parse(JSON.stringify(event))).to.be.jsonSchema(GetSettingsSchema);
  });
  it('returns the right values for the event', () => {
    const event = new GetSettingsEvent('context');
    expect(JSON.parse(JSON.stringify(event)).context).to.equal('context');
  });
});
