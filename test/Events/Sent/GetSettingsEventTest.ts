import 'mocha';

import { expect, use } from 'chai';

import GetSettingsEvent from '@/Events/Sent/GetSettingsEvent';
import { GetSettingsType } from '@/StreamdeckTypes/Received';
import jsonschema from 'chai-json-schema';

use(jsonschema);

describe('GetSettingsEventTest test', () => {
  it('validates the event against the json schema', () => {
    const event = new GetSettingsEvent('context');
    expect(JSON.parse(JSON.stringify(event))).to.be.jsonSchema(GetSettingsType);
  });
  it('returns the right values for the event', () => {
    const event = new GetSettingsEvent('context');
    expect(JSON.parse(JSON.stringify(event)).context).to.equal('context');
  });
});
