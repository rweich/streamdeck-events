import 'mocha';

import ApplicationDidLaunchEvent from '../../../src/incoming/plugin/ApplicationDidLaunchEvent';
import EventValidationError from '../../../src/incoming/exception/EventValidationError';
import { IncomingPluginEvents } from '../../../src/incoming/plugin/IncomingPluginEvents';
import eventInvalidType from '../fixtures/applicationDidLaunchEvent.invalid-eventtype.json';
import eventMissingParameter from '../fixtures/applicationDidLaunchEvent.missing-param.json';
import eventValid from '../fixtures/applicationDidLaunchEvent.valid.json';
import { expect } from 'chai';

describe('ApplicationDidLaunchEvent test', () => {
  it('should create the event when using the correct payload', function () {
    const event = new ApplicationDidLaunchEvent(eventValid);
    expect(event.event).to.equal(IncomingPluginEvents.ApplicationDidLaunch);
    expect(event.application).to.equal('com.apple.mail');
  });
  it('should throw a validation error on missing parameters', function () {
    expect(() => new ApplicationDidLaunchEvent(eventMissingParameter)).to.throw(
      EventValidationError,
      /required property 'application'/,
    );
  });
  it('should throw a validation error on wrong event type', function () {
    expect(() => new ApplicationDidLaunchEvent(eventInvalidType)).to.throw(
      EventValidationError,
      /should match pattern "\^applicationDidLaunch\$"/,
    );
  });
});
