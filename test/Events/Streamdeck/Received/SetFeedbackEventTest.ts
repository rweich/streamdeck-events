import { expect } from 'chai';

import EventValidationError from '@/Events/Received/Exception/EventValidationError';
import { SetFeedbackEvent } from '@/Events/Streamdeck/Received';

import eventMissingParameter from './fixtures/setFeedback/missingPayload.json';
import eventValid from './fixtures/setFeedback/valid.json';
import eventInvalidType from './fixtures/setFeedback/wrongEvent.json';

describe('SetFeedbackEvent Test', () => {
  it('should create the event when using the correct payload', function () {
    const event = new SetFeedbackEvent(eventValid);
    expect(event.event).to.equal('setFeedback');
    expect(event.context).to.equal('FEDCBA9876543210FEDCBA9876543210');

    expect(event.payload).to.haveOwnProperty('value');
    expect((event.payload as { value: number }).value).to.equal('0%');
  });

  it('should throw a validation error on missing parameters', function () {
    expect(() => new SetFeedbackEvent(eventMissingParameter)).to.throw(
      EventValidationError,
      /required property 'payload'/,
    );
  });

  it('should throw a validation error on wrong event type', function () {
    expect(() => new SetFeedbackEvent(eventInvalidType)).to.throw(
      EventValidationError,
      /must match pattern "\^setFeedback\$"/,
    );
  });
});
