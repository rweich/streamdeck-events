import { ReceivedStreamdeckEvents, SetStateEvent } from '@/Events/Streamdeck/Received';

import EventValidationError from '@/Events/Received/Exception/EventValidationError';
import eventInvalidType from './fixtures/setStateEvent.invalid-eventtype.json';
import eventMissingParameter from './fixtures/setStateEvent.missing-param.json';
import eventValid from './fixtures/setStateEvent.valid.json';
import { expect } from 'chai';

describe('SetStateEvent Test', () => {
  it('should create the event when using the correct payload', function () {
    const event = new SetStateEvent(eventValid);
    expect(event.event).to.equal(ReceivedStreamdeckEvents.SetState);
    expect(event.context).to.equal('opaqueValue');
    expect(event.state).to.equal(1);
  });
  it('should throw a validation error on missing parameters', function () {
    expect(() => new SetStateEvent(eventMissingParameter)).to.throw(
      EventValidationError,
      /required property 'payload'/,
    );
  });
  it('should throw a validation error on wrong event type', function () {
    expect(() => new SetStateEvent(eventInvalidType)).to.throw(
      EventValidationError,
      /should match pattern "\^setState\$"/,
    );
  });
});
