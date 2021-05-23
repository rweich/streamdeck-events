import 'mocha';

import EventValidationError from '@/Events/Received/Exception/EventValidationError';
import WillAppearEvent from '@/Events/Received/Plugin/WillAppearEvent';
import eventInvalidType from '../fixtures/willAppearEvent.invalid-eventtype.json';
import eventMissingParameter from '../fixtures/willAppearEvent.missing-param.json';
import eventValid from '../fixtures/willAppearEvent.valid.json';
import { expect } from 'chai';

describe('WillAppearEvent test', () => {
  it('should create the event when using the correct payload', function () {
    const event = new WillAppearEvent(eventValid);
    expect(event.event).to.equal('willAppear');
    expect(event.action).to.equal('my.willappear.action');
    expect(event.context).to.equal('willappearcontext');
    expect(event.state).to.be.undefined;
    expect(Object.keys(event.settings as Record<string, unknown>)).to.be.length(0);
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
      /must match pattern "\^willAppear\$"/,
    );
  });
});
