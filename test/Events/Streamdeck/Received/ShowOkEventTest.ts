import EventValidationError from '@/Events/Received/Exception/EventValidationError';
import { ShowOkEvent } from '@/Events/Streamdeck/Received';
import eventInvalidType from './fixtures/showOkEvent.invalid-eventtype.json';
import eventMissingParameter from './fixtures/showOkEvent.missing-param.json';
import eventValid from './fixtures/showOkEvent.valid.json';
import { expect } from 'chai';

describe('ShowOkEvent Test', () => {
  it('should create the event when using the correct payload', function () {
    const event = new ShowOkEvent(eventValid);
    expect(event.event).to.equal('showOk');
    expect(event.context).to.equal('opaqueValue');
  });
  it('should throw a validation error on missing parameters', function () {
    expect(() => new ShowOkEvent(eventMissingParameter)).to.throw(EventValidationError, /required property 'context'/);
  });
  it('should throw a validation error on wrong event type', function () {
    expect(() => new ShowOkEvent(eventInvalidType)).to.throw(EventValidationError, /should match pattern "\^showOk\$"/);
  });
});
