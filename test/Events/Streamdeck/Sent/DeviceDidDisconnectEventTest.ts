import 'mocha';

import { expect, use } from 'chai';
import jsonschema from 'chai-json-schema';

import { DeviceDidDisconnectEvent } from '@/Events/Streamdeck/Sent';
import { DeviceDidDisconnectType } from '@/StreamdeckTypes/Sent';

use(jsonschema);

describe('DeviceDidDisconnectEvent test', () => {
  it('validates the event against the json schema', () => {
    const event = new DeviceDidDisconnectEvent('device');
    expect(JSON.parse(JSON.stringify(event))).to.be.jsonSchema(DeviceDidDisconnectType);
  });
  it('returns the right default values for the event', () => {
    const event = new DeviceDidDisconnectEvent('device');
    const parse: DeviceDidDisconnectType = JSON.parse(JSON.stringify(event));
    expect(parse.event).to.equal('deviceDidDisconnect');
    expect(parse.device).to.equal('device');
  });
});
