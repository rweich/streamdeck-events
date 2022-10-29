import 'mocha';

import { expect, use } from 'chai';
import jsonschema from 'chai-json-schema';

import { DidReceiveGlobalSettingsEvent } from '@/Events/Streamdeck/Sent';
import { DidReceiveGlobalSettingsType } from '@/StreamdeckTypes/Sent';

use(jsonschema);

describe('DidReceiveGlobalSettingsEvent test', () => {
  it('validates the event against the json schema', () => {
    const event = new DidReceiveGlobalSettingsEvent({ my: 'settings' });
    expect(JSON.parse(JSON.stringify(event))).to.be.jsonSchema(DidReceiveGlobalSettingsType);
  });
  it('returns the right values for the event', () => {
    const event = new DidReceiveGlobalSettingsEvent({ my: 'settings' });
    const parse: DidReceiveGlobalSettingsType = JSON.parse(JSON.stringify(event));
    expect(parse.event).to.equal('didReceiveGlobalSettings');
    expect(parse.payload.settings.my).to.equal('settings');
  });
});
