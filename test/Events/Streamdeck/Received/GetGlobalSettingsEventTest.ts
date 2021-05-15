import { GetGlobalSettingsEvent, ReceivedStreamdeckEvents } from '@/Events/Streamdeck/Received';

import EventValidationError from '@/Events/Received/Exception/EventValidationError';
import eventInvalidType from './fixtures/getGlobalSettingsEvent.invalid-eventtype.json';
import eventMissingParameter from './fixtures/getGlobalSettingsEvent.missing-param.json';
import eventValid from './fixtures/getGlobalSettingsEvent.valid.json';
import { expect } from 'chai';

describe('GetGlobalSettingsEvent Test', () => {
  it('should create the event when using the correct payload', function () {
    const event = new GetGlobalSettingsEvent(eventValid);
    expect(event.event).to.equal(ReceivedStreamdeckEvents.GetGlobalSettings);
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
      /should match pattern "\^getGlobalSettings\$"/,
    );
  });
});
