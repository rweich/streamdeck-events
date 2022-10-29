import 'mocha';

import { expect, use } from 'chai';
import jsonschema from 'chai-json-schema';

import { DeviceType } from '@/Events/Received/Plugin';
import { DeviceDidConnectEvent } from '@/Events/Streamdeck/Sent';
import { DeviceDidConnectType } from '@/StreamdeckTypes/Sent';

use(jsonschema);

describe('DeviceDidConnectEvent test', () => {
  it('validates the event against the json schema', () => {
    const event = new DeviceDidConnectEvent('device');
    expect(JSON.parse(JSON.stringify(event))).to.be.jsonSchema(DeviceDidConnectType);
  });
  it('returns the right default values for the event', () => {
    const event = new DeviceDidConnectEvent('device');
    const parse: DeviceDidConnectType = JSON.parse(JSON.stringify(event));
    expect(parse.event).to.equal('deviceDidConnect');
    expect(parse.device).to.equal('device');
    expect(parse.deviceInfo.type).to.equal(DeviceType.StreamDeckMini);
    expect(parse.deviceInfo.name).to.equal('a name');
    expect(parse.deviceInfo.size.rows).to.equal(3);
    expect(parse.deviceInfo.size.columns).to.equal(3);
  });
  it('returns the right values for the changed options', () => {
    const event = new DeviceDidConnectEvent('lala', {
      columns: 200,
      name: 'foo',
      rows: 100,
      type: 'CorsairGKeys',
    });
    const parse: DeviceDidConnectType = JSON.parse(JSON.stringify(event));
    expect(parse.device).to.equal('lala');
    expect(parse.deviceInfo.type).to.equal(DeviceType.CorsairGKeys);
    expect(parse.deviceInfo.name).to.equal('foo');
    expect(parse.deviceInfo.size.rows).to.equal(100);
    expect(parse.deviceInfo.size.columns).to.equal(200);
  });
});
