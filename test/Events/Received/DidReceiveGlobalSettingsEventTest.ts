import 'mocha';

import DidReceiveGlobalSettingsEvent from '@/Events/Received/DidReceiveGlobalSettingsEvent';
import EventValidationError from '@/Events/Received/Exception/EventValidationError';
import eventInvalidType from './fixtures/didReceiveGlobalSettingsEvent.invalid-eventtype.json';
import eventMissingParameter from './fixtures/didReceiveGlobalSettingsEvent.missing-param.json';
import eventValid from './fixtures/didReceiveGlobalSettingsEvent.valid.json';
import { expect } from 'chai';

describe('DidReceiveSettingsEvent test', () => {
  it('should create the event when using the correct payload', function () {
    const event: DidReceiveGlobalSettingsEvent = new DidReceiveGlobalSettingsEvent(eventValid);
    expect(event.settings).to.haveOwnProperty('foo');
    expect(event.event).to.equal('didReceiveGlobalSettings');
  });
  it('should throw a validation error on missing parameters', function () {
    expect(() => new DidReceiveGlobalSettingsEvent(eventMissingParameter)).to.throw(EventValidationError, /settings/);
  });
  it('should throw a validation error on wrong event type', function () {
    expect(() => new DidReceiveGlobalSettingsEvent(eventInvalidType)).to.throw(
      EventValidationError,
      /should match pattern "\^didReceiveGlobalSettings\$"/,
    );
  });
});
