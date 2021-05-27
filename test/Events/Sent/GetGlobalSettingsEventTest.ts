import 'mocha';

import { expect, use } from 'chai';

import GetGlobalSettingsEvent from '@/Events/Sent/GetGlobalSettingsEvent';
import { GetGlobalSettingsType } from '@/StreamdeckTypes/Received';
import jsonschema from 'chai-json-schema';

use(jsonschema);

describe('GetGlobalSettingsEventTest test', () => {
  it('validates the event against the json schema', () => {
    const event = new GetGlobalSettingsEvent('context');
    expect(JSON.parse(JSON.stringify(event))).to.be.jsonSchema(GetGlobalSettingsType);
  });
  it('returns the right values for the event', () => {
    const event = new GetGlobalSettingsEvent('context');
    expect(JSON.parse(JSON.stringify(event)).context).to.equal('context');
  });
});
