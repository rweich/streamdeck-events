import EventValidationError from '@/Events/Received/Exception/EventValidationError';
import { GetGlobalSettingsEvent } from '@/Events/Streamdeck/Received';
import eventInvalidType from './fixtures/getGlobalSettingsEvent.invalid-eventtype.json';
import eventMissingParameter from './fixtures/getGlobalSettingsEvent.missing-param.json';
import eventValid from './fixtures/getGlobalSettingsEvent.valid.json';
import { expect } from 'chai';

describe('GetGlobalSettingsEvent Test', () => {
  it('should create the event when using the correct payload', function () {
    const event = new GetGlobalSettingsEvent(eventValid);
    expect(event.event).to.equal('getGlobalSettings');
    expect(event.context).to.equal('opaqueValue');
  });
  it('should throw a validation error on missing parameters', function () {
    expect(() => new GetGlobalSettingsEvent(eventMissingParameter)).to.throw(
      EventValidationError,
      /required property 'context'/,
    );
  });
  it('should throw a validation error on wrong event type', function () {
    expect(() => new GetGlobalSettingsEvent(eventInvalidType)).to.throw(
      EventValidationError,
      /must match pattern "\^getGlobalSettings\$"/,
    );
  });
});
