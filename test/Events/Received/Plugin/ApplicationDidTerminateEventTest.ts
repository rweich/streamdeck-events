import 'mocha';

import ApplicationDidTerminateEvent from '@/Events/Received/Plugin/ApplicationDidTerminateEvent';
import EventValidationError from '@/Events/Received/Exception/EventValidationError';
import eventInvalidType from '../fixtures/applicationDidTerminateEvent.invalid-eventtype.json';
import eventMissingParameter from '../fixtures/applicationDidTerminateEvent.missing-param.json';
import eventValid from '../fixtures/applicationDidTerminateEvent.valid.json';
import { expect } from 'chai';

describe('ApplicationDidTerminateEvent test', () => {
  it('should create the event when using the correct payload', function () {
    const event = new ApplicationDidTerminateEvent(eventValid);
    expect(event.event).to.equal('applicationDidTerminate');
    expect(event.application).to.equal('com.apple.mails');
  });
  it('should throw a validation error on missing parameters', function () {
    expect(() => new ApplicationDidTerminateEvent(eventMissingParameter)).to.throw(
      EventValidationError,
      /required property 'application'/,
    );
  });
  it('should throw a validation error on wrong event type', function () {
    expect(() => new ApplicationDidTerminateEvent(eventInvalidType)).to.throw(
      EventValidationError,
      /must match pattern "\^applicationDidTerminate\$"/,
    );
  });
});
