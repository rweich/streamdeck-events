import { expect } from 'chai';

import EventValidationError from '@/Events/Received/Exception/EventValidationError';
import { SetFeedbackEvent } from '@/Events/Streamdeck/Received';
import { BarFeedbackComponent } from "@/StreamdeckTypes/Received/Feedback/Components";


import eventMissingParameter from './fixtures/setFeedback/missingPayload.json';
import eventValid from './fixtures/setFeedback/valid.json';
import eventCustom from './fixtures/setFeedback/custom.json';
import eventInvalidType from './fixtures/setFeedback/wrongEvent.json';
import eventInvalidTitle from './fixtures/setFeedback/badTitle.json';

describe('SetFeedbackEvent Test', () => {
  it('should create the event when using the correct payload', () => {
    const event = new SetFeedbackEvent(eventValid);
    expect(event.event).to.equal('setFeedback');
    expect(event.context).to.equal('FEDCBA9876543210FEDCBA9876543210');

    expect(event.payload).to.haveOwnProperty('value');
    expect((event.payload).value).to.equal('0%');
  });

  it('should create an event with keys for a custom layout in the payload', () => {
    const event = new SetFeedbackEvent(eventCustom);

    expect(event.payload).to.haveOwnProperty('mxProgress');

    let mxProgressElement = event.payload.mxProgress as BarFeedbackComponent;
    expect(mxProgressElement.bar_bg_c).to.equal('#FFFF00');
    expect(mxProgressElement.value).to.equal(40);
  })

  it('should throw a validation error on missing parameters', () => {
    expect(() => new SetFeedbackEvent(eventMissingParameter)).to.throw(
      EventValidationError,
      /required property 'payload'/,
    );
  });

  it('should throw a validation error on wrong event type', () => {
    expect(() => new SetFeedbackEvent(eventInvalidType)).to.throw(
      EventValidationError,
      /must match pattern "\^setFeedback\$"/,
    );
  });

  it('should throw a validation error on a malformed title', () => {
    expect(() => new SetFeedbackEvent(eventInvalidTitle)).to.throw(
      EventValidationError,
      /must have required property 'value'/
    )
  })
});
