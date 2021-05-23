import 'mocha';

import DidReceiveSettingsEvent from '@/Events/Received/DidReceiveSettingsEvent';
import EventValidationError from '@/Events/Received/Exception/EventValidationError';
import eventInvalidType from './fixtures/didReceiveSettingsEvent.invalid-eventtype.json';
import eventMissingParameter from './fixtures/didReceiveSettingsEvent.missing-param.json';
import eventValid from './fixtures/didReceiveSettingsEvent.valid.json';
import { expect } from 'chai';

describe('DidReceiveSettingsEvent test', () => {
  it('should create the event when using the correct payload', function () {
    const event = new DidReceiveSettingsEvent(eventValid);
    expect(event.action).to.equal('com.elgato.example.action1');
    expect(event.context).to.equal('aopaqueValue');
    expect(event.device).to.equal('adevice');
    expect(event.event).to.equal('didReceiveSettings');
    expect(event.column).to.equal(3);
    expect(event.row).to.equal(1);
    expect(event.isInMultiAction).to.be.false;
  });
  it('should throw a validation error on missing parameters', function () {
    expect(() => new DidReceiveSettingsEvent(eventMissingParameter)).to.throw(EventValidationError, /device/);
  });
  it('should throw a validation error on wrong event type', function () {
    expect(() => new DidReceiveSettingsEvent(eventInvalidType)).to.throw(
      EventValidationError,
      /must match pattern "\^didReceiveSettings\$"/,
    );
  });
});
