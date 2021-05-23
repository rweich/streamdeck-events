import 'mocha';

import EventValidationError from '@/Events/Received/Exception/EventValidationError';
import WillDisappearEvent from '@/Events/Received/Plugin/WillDisappearEvent';
import eventInvalidType from '../fixtures/willDisappearEvent.invalid-eventtype.json';
import eventMissingParameter from '../fixtures/willDisappearEvent.missing-param.json';
import eventValid from '../fixtures/willDisappearEvent.valid.json';
import { expect } from 'chai';

describe('WillDisappearEvent test', () => {
  it('should create the event when using the correct payload', function () {
    const event = new WillDisappearEvent(eventValid);
    expect(event.event).to.equal('willDisappear');
    expect(event.action).to.equal('dsaaction');
    expect(event.context).to.equal('disacontext');
  });
  it('should throw a validation error on missing parameters', function () {
    expect(() => new WillDisappearEvent(eventMissingParameter)).to.throw(
      EventValidationError,
      /required property 'context'/,
    );
  });
  it('should throw a validation error on wrong event type', function () {
    expect(() => new WillDisappearEvent(eventInvalidType)).to.throw(
      EventValidationError,
      /must match pattern "\^willDisappear\$"/,
    );
  });
});
