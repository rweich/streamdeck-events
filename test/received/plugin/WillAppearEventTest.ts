import 'mocha';

import EventValidationError from '@/Events/Received/exception/EventValidationError';
import { ReceivedPluginEvents } from '@/Events/Received/plugin/ReceivedPluginEvents';
import WillAppearEvent from '@/Events/Received/plugin/WillAppearEvent';
import eventInvalidType from '../fixtures/willAppearEvent.invalid-eventtype.json';
import eventMissingParameter from '../fixtures/willAppearEvent.missing-param.json';
import eventValid from '../fixtures/willAppearEvent.valid.json';
import { expect } from 'chai';

describe('WillAppearEvent test', () => {
  it('should create the event when using the correct payload', function () {
    const event = new WillAppearEvent(eventValid);
    expect(event.event).to.equal(ReceivedPluginEvents.WillAppear);
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
