import { ReceivedStreamdeckEvents, SetSettingsEvent } from '@/Events/Streamdeck/Received';

import EventValidationError from '@/Events/Received/Exception/EventValidationError';
import eventInvalidType from './fixtures/setSettingsEvent.invalid-eventtype.json';
import eventMissingParameter from './fixtures/setSettingsEvent.missing-param.json';
import eventValid from './fixtures/setSettingsEvent.valid.json';
import { expect } from 'chai';

describe('SetSettingsEvent Test', () => {
  it('should create the event when using the correct payload', function () {
    const event = new SetSettingsEvent(eventValid);
    expect(event.event).to.equal(ReceivedStreamdeckEvents.SetSettings);
    expect(event.context).to.equal('opaqueValue');
    expect((event.payload as { foo: string }).foo).to.equal('bar');
    expect((event.payload as { bar: string }).bar).to.equal('baz');
  });
  it('should throw a validation error on missing parameters', function () {
    expect(() => new SetSettingsEvent(eventMissingParameter)).to.throw(
      EventValidationError,
      /required property 'payload'/,
    );
  });
  it('should throw a validation error on wrong event type', function () {
    expect(() => new SetSettingsEvent(eventInvalidType)).to.throw(
      EventValidationError,
      /should match pattern "\^setSettings\$"/,
    );
  });
});
