import { expect } from 'chai';

import EventValidationError from '@/Events/Received/Exception/EventValidationError';
import { SwitchToProfileEvent } from '@/Events/Streamdeck/Received';

import eventInvalidType from './fixtures/switchToProfileEvent.invalid-eventtype.json';
import eventMissingParameter from './fixtures/switchToProfileEvent.missing-param.json';
import eventValid from './fixtures/switchToProfileEvent.valid.json';

describe('SwitchToProfileEvent Test', () => {
  it('should create the event when using the correct payload', function () {
    const event = new SwitchToProfileEvent(eventValid);
    expect(event.event).to.equal('switchToProfile');
    expect(event.context).to.equal('opaqueValue');
    expect(event.device).to.equal('opaqueValue');
    expect(event.profile).to.equal('ProfileName');
  });
  it('should throw a validation error on missing parameters', function () {
    expect(() => new SwitchToProfileEvent(eventMissingParameter)).to.throw(
      EventValidationError,
      /required property 'profile'/,
    );
  });
  it('should throw a validation error on wrong event type', function () {
    expect(() => new SwitchToProfileEvent(eventInvalidType)).to.throw(
      EventValidationError,
      /must match pattern "\^switchToProfile\$"/,
    );
  });
});
