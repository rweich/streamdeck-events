import 'mocha';

import DeviceDidConnectEvent from '@/Events/Received/Plugin/DeviceDidConnectEvent';
import { DeviceType } from '@/Events/Received/Plugin';
import EventValidationError from '@/Events/Received/Exception/EventValidationError';
import eventInvalidType from '../fixtures/deviceDidConnectEvent.invalid-eventtype.json';
import eventMissingParameter from '../fixtures/deviceDidConnectEvent.missing-param.json';
import eventValid from '../fixtures/deviceDidConnectEvent.valid.json';
import { expect } from 'chai';

describe('DeviceDidConnectEvent test', () => {
  it('should create the event when using the correct payload', function () {
    const event = new DeviceDidConnectEvent(eventValid);
    expect(event.device).to.equal('dededededded');
    expect(event.name).to.equal('Stream Deck XL');
    expect(event.type).to.equal(DeviceType.StreamDeckXL);
    expect(event.typeName).to.equal('StreamDeckXL');
    expect(event.columns).to.equal(8);
    expect(event.rows).to.equal(4);
    expect(event.event).to.equal('deviceDidConnect');
  });
  it('should convert the types to typenames', function () {
    const eventJson = eventValid;
    eventJson.deviceInfo.type = DeviceType.StreamDeck;
    expect(new DeviceDidConnectEvent(eventJson).typeName).to.equal('StreamDeck');
    // eventJson.deviceInfo.type = DeviceType.StreamDeckMini;
    // expect(new DeviceDidConnectEvent(eventJson).typeName).to.equal('StreamDeckMini');
    // eventJson.deviceInfo.type = DeviceType.StreamDeckXL;
    // expect(new DeviceDidConnectEvent(eventJson).typeName).to.equal('StreamDeckXL');
    // eventJson.deviceInfo.type = DeviceType.StreamDeckMobile;
    // expect(new DeviceDidConnectEvent(eventJson).typeName).to.equal('StreamDeckMobile');
    // eventJson.deviceInfo.type = DeviceType.CorsairGKeys;
    // expect(new DeviceDidConnectEvent(eventJson).typeName).to.equal('CorsairGKeys');
  });
  it('should throw a validation error on missing parameters', function () {
    expect(() => new DeviceDidConnectEvent(eventMissingParameter)).to.throw(
      EventValidationError,
      /required property 'type'/,
    );
  });
  it('should throw a validation error on wrong event type', function () {
    expect(() => new DeviceDidConnectEvent(eventInvalidType)).to.throw(
      EventValidationError,
      /must match pattern "\^deviceDidConnect\$"/,
    );
  });
});
