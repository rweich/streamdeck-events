import 'mocha';

import EventValidationError from '@/Events/Received/Exception/EventValidationError';
import SystemDidWakeUpEvent from '@/Events/Received/Plugin/SystemDidWakeUpEvent';
import eventInvalidType from '../fixtures/systemDidWakeUpEvent.invalid-eventtype.json';
import eventMissingParameter from '../fixtures/systemDidWakeUpEvent.missing-param.json';
import eventValid from '../fixtures/systemDidWakeUpEvent.valid.json';
import { expect } from 'chai';

describe('SystemDidWakeUpEvent test', () => {
  it('should create the event when using the correct payload', function () {
    const event = new SystemDidWakeUpEvent(eventValid);
    expect(event.event).to.equal('systemDidWakeUp');
  });
  it('should throw a validation error on missing parameters', function () {
    expect(() => new SystemDidWakeUpEvent(eventMissingParameter)).to.throw(
      EventValidationError,
      /required property 'event'/,
    );
  });
  it('should throw a validation error on wrong event type', function () {
    expect(() => new SystemDidWakeUpEvent(eventInvalidType)).to.throw(
      EventValidationError,
      /must match pattern "\^systemDidWakeUp\$"/,
    );
  });
});
