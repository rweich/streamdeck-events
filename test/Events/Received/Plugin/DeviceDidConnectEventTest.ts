import 'mocha';

import DeviceDidConnectEvent from '@/Events/Received/Plugin/DeviceDidConnectEvent';
import { DeviceType } from '@/Events/Received/Plugin';
import EventValidationError from '@/Events/Received/Exception/EventValidationError';
import { ReceivedPluginEvents } from '@/Events/Received/Plugin/ReceivedPluginEvents';
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
    expect(event.columns).to.equal(8);
    expect(event.rows).to.equal(4);
    expect(event.event).to.equal(ReceivedPluginEvents.DeviceDidConnect);
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
      /should match pattern "\^deviceDidConnect\$"/,
    );
  });
});
