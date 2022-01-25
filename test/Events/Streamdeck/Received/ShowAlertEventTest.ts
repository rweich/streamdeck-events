import { expect } from 'chai';

import EventValidationError from '@/Events/Received/Exception/EventValidationError';
import { ShowAlertEvent } from '@/Events/Streamdeck/Received';

import eventInvalidType from './fixtures/showAlertEvent.invalid-eventtype.json';
import eventMissingParameter from './fixtures/showAlertEvent.missing-param.json';
import eventValid from './fixtures/showAlertEvent.valid.json';

describe('ShowAlertEvent Test', () => {
  it('should create the event when using the correct payload', function () {
    const event = new ShowAlertEvent(eventValid);
    expect(event.event).to.equal('showAlert');
    expect(event.context).to.equal('opaqueValue');
  });
  it('should throw a validation error on missing parameters', function () {
    expect(() => new ShowAlertEvent(eventMissingParameter)).to.throw(
      EventValidationError,
      /required property 'context'/,
    );
  });
  it('should throw a validation error on wrong event type', function () {
    expect(() => new ShowAlertEvent(eventInvalidType)).to.throw(
      EventValidationError,
      /must match pattern "\^showAlert\$"/,
    );
  });
});
