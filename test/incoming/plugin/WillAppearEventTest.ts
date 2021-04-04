import 'mocha';

import EventValidationError from '../../../src/incoming/exception/EventValidationError';
import { IncomingPluginEvents } from '../../../src/incoming/plugin/IncomingPluginEvents';
import WillAppearEvent from '../../../src/incoming/plugin/WillAppearEvent';
import eventInvalidType from '../fixtures/willAppearEvent.invalid-eventtype.json';
import eventMissingParameter from '../fixtures/willAppearEvent.missing-param.json';
import eventValid from '../fixtures/willAppearEvent.valid.json';
import { expect } from 'chai';

describe('WillAppearEvent test', () => {
  it('should create the event when using the correct payload', function () {
    const event = new WillAppearEvent(eventValid);
    expect(event.event).to.equal(IncomingPluginEvents.WillAppear);
    expect(event.action).to.equal('my.willappear.action');
    expect(event.context).to.equal('willappearcontext');
  });
  it('should throw a validation error on missing parameters', function () {
    expect(() => new WillAppearEvent(eventMissingParameter)).to.throw(
      EventValidationError,
      /required property 'device'/,
    );
  });
  it('should throw a validation error on wrong event type', function () {
    expect(() => new WillAppearEvent(eventInvalidType)).to.throw(
      EventValidationError,
      /should match pattern "\^willAppear\$"/,
    );
  });
});
