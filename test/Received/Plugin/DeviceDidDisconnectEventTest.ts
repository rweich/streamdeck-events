import 'mocha';

import DeviceDidDisconnectEvent from '@/Events/Received/Plugin/DeviceDidDisconnectEvent';
import EventValidationError from '@/Events/Received/Exception/EventValidationError';
import { ReceivedPluginEvents } from '@/Events/Received/Plugin/ReceivedPluginEvents';
import eventInvalidType from '../fixtures/deviceDidDisconnectEvent.invalid-eventtype.json';
import eventMissingParameter from '../fixtures/deviceDidDisconnectEvent.missing-param.json';
import eventValid from '../fixtures/deviceDidDisconnectEvent.valid.json';
import { expect } from 'chai';

describe('DeviceDidDisconnectEvent test', () => {
  it('should create the event when using the correct payload', function () {
    const event = new DeviceDidDisconnectEvent(eventValid);
    expect(event.device).to.equal('opaqueValue');
    expect(event.event).to.equal(ReceivedPluginEvents.DeviceDidDisconnect);
  });
  it('should throw a validation error on missing parameters', function () {
    expect(() => new DeviceDidDisconnectEvent(eventMissingParameter)).to.throw(
      EventValidationError,
      /required property 'device'/,
    );
  });
  it('should throw a validation error on wrong event type', function () {
    expect(() => new DeviceDidDisconnectEvent(eventInvalidType)).to.throw(
      EventValidationError,
      /should match pattern "\^deviceDidDisconnect\$"/,
    );
  });
});
