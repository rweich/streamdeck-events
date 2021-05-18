import EventValidationError from '@/Events/Received/Exception/EventValidationError';
import { GetSettingsEvent } from '@/Events/Streamdeck/Received';
import eventInvalidType from './fixtures/getSettingsEvent.invalid-eventtype.json';
import eventMissingParameter from './fixtures/getSettingsEvent.missing-param.json';
import eventValid from './fixtures/getSettingsEvent.valid.json';
import { expect } from 'chai';

describe('GetSettingsEvent Test', () => {
  it('should create the event when using the correct payload', function () {
    const event = new GetSettingsEvent(eventValid);
    expect(event.event).to.equal('getSettings');
    expect(event.context).to.equal('opaqueValue');
  });
  it('should throw a validation error on missing parameters', function () {
    expect(() => new GetSettingsEvent(eventMissingParameter)).to.throw(
      EventValidationError,
      /required property 'context'/,
    );
  });
  it('should throw a validation error on wrong event type', function () {
    expect(() => new GetSettingsEvent(eventInvalidType)).to.throw(
      EventValidationError,
      /should match pattern "\^getSettings\$"/,
    );
  });
});
