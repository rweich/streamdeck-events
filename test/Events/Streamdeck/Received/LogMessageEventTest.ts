import EventValidationError from '@/Events/Received/Exception/EventValidationError';
import LogMessageEvent from '@/Events/Streamdeck/Received/LogMessageEvent';
import eventInvalidType from './fixtures/logMessageEvent.invalid-eventtype.json';
import eventMissingParameter from './fixtures/logMessageEvent.missing-param.json';
import eventValid from './fixtures/logMessageEvent.valid.json';
import { expect } from 'chai';

describe('LogMessageEvent Test', () => {
  it('should create the event when using the correct payload', function () {
    const event = new LogMessageEvent(eventValid);
    expect(event.event).to.equal('logMessage');
    expect(event.message).to.equal('Hello World!');
  });
  it('should throw a validation error on missing parameters', function () {
    expect(() => new LogMessageEvent(eventMissingParameter)).to.throw(
      EventValidationError,
      /required property 'message'/,
    );
  });
  it('should throw a validation error on wrong event type', function () {
    expect(() => new LogMessageEvent(eventInvalidType)).to.throw(
      EventValidationError,
      /should match pattern "\^logMessage\$"/,
    );
  });
});
