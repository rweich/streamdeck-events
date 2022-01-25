import 'mocha';

import { expect } from 'chai';

import EventValidationError from '@/Events/Received/Exception/EventValidationError';
import DeviceDidDisconnectEvent from '@/Events/Received/Plugin/DeviceDidDisconnectEvent';

import eventInvalidType from '../fixtures/deviceDidDisconnectEvent.invalid-eventtype.json';
import eventMissingParameter from '../fixtures/deviceDidDisconnectEvent.missing-param.json';
import eventValid from '../fixtures/deviceDidDisconnectEvent.valid.json';

describe('DeviceDidDisconnectEvent test', () => {
  it('should create the event when using the correct payload', function () {
    const event = new DeviceDidDisconnectEvent(eventValid);
    expect(event.device).to.equal('opaqueValue');
    expect(event.event).to.equal('deviceDidDisconnect');
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
      /must match pattern "\^deviceDidDisconnect\$"/,
    );
  });
});
