import { expect } from 'chai';

import EventValidationError from '@/Events/Received/Exception/EventValidationError';
import { SetFeedbackLayoutEvent } from '@/Events/Streamdeck/Received';

import eventMissingParameter from './fixtures/setFeedbackLayout/missingLayout.json';
import eventValid from './fixtures/setFeedbackLayout/valid.json';
import eventInvalidType from './fixtures/setFeedbackLayout/wrongEvent.json';

describe('SetFeedbackLayoutEvent Test', () => {
  it('should create the event when using the correct payload', function () {
    const event = new SetFeedbackLayoutEvent(eventValid);
    expect(event.event).to.equal('setFeedbackLayout');
    expect(event.context).to.equal('FEDCBA9876543210FEDCBA9876543210');

    expect(event.layout).to.equal('$B1');
  });

  it('should throw a validation error on missing parameters', function () {
    expect(() => new SetFeedbackLayoutEvent(eventMissingParameter)).to.throw(
      EventValidationError,
      /required property 'layout'/,
    );
  });

  it('should throw a validation error on wrong event type', function () {
    expect(() => new SetFeedbackLayoutEvent(eventInvalidType)).to.throw(
      EventValidationError,
      /must match pattern "\^setFeedbackLayout\$"/,
    );
  });
});
