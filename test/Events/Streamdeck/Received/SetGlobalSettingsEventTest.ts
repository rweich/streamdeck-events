import { expect } from 'chai';

import EventValidationError from '@/Events/Received/Exception/EventValidationError';
import { SetGlobalSettingsEvent } from '@/Events/Streamdeck/Received';

import eventInvalidType from './fixtures/setGlobalSettingsEvent.invalid-eventtype.json';
import eventMissingParameter from './fixtures/setGlobalSettingsEvent.missing-param.json';
import eventValid from './fixtures/setGlobalSettingsEvent.valid.json';

describe('SetGlobalSettingsEvent Test', () => {
  it('should create the event when using the correct payload', function () {
    const event = new SetGlobalSettingsEvent(eventValid);
    expect(event.event).to.equal('setGlobalSettings');
    expect(event.context).to.equal('opaqueValue');
    expect((event.payload as { bar: string }).bar).to.equal('foo');
    expect((event.payload as { baz: string }).baz).to.equal('bar');
  });
  it('should throw a validation error on missing parameters', function () {
    expect(() => new SetGlobalSettingsEvent(eventMissingParameter)).to.throw(
      EventValidationError,
      /required property 'payload'/,
    );
  });
  it('should throw a validation error on wrong event type', function () {
    expect(() => new SetGlobalSettingsEvent(eventInvalidType)).to.throw(
      EventValidationError,
      /must match pattern "\^setGlobalSettings\$"/,
    );
  });
});
