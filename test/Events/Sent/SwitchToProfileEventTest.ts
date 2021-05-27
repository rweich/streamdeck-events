import 'mocha';

import { expect, use } from 'chai';

import SwitchToProfileEvent from '@/Events/Sent/SwitchToProfileEvent';
import { SwitchToProfileType } from '@/StreamdeckTypes/Received';
import jsonschema from 'chai-json-schema';

use(jsonschema);

describe('SwitchToProfileEventTest test', () => {
  it('validates the event against the json schema', () => {
    const event = new SwitchToProfileEvent('profilename', 'context', 'device');
    expect(JSON.parse(JSON.stringify(event))).to.be.jsonSchema(SwitchToProfileType);
  });
  it('returns the right values for the event', () => {
    const event = new SwitchToProfileEvent('profilename', 'context', 'device');
    const object = JSON.parse(JSON.stringify(event));
    expect(object.context).to.equal('context');
    expect(object.device).to.equal('device');
    expect(object.event).to.equal('switchToProfile');
    expect(object.payload.profile).to.equal('profilename');
  });
});
