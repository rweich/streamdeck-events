import 'mocha';

import EventValidationError from '@/Events/Received/Exception/EventValidationError';
import KeyUpEvent from '@/Events/Received/Plugin/KeyUpEvent';
import eventInvalidType from '../fixtures/keyUpEvent.invalid-eventtype.json';
import eventMissingParameter from '../fixtures/keyUpEvent.missing-param.json';
import eventValid from '../fixtures/keyUpEvent.valid.json';
import eventValidWithState from '../fixtures/keyUpEvent.valid.withstate.json';
import { expect } from 'chai';

describe('KeyUpEvent test', () => {
  it('should create the event when using the correct payload', function () {
    const event = new KeyUpEvent(eventValid);
    expect(event.action).to.equal('some.up.action');
    expect(event.context).to.equal('zxcvfsda');
    expect(event.device).to.equal('rweqasd');
    expect(event.event).to.equal('keyUp');
    expect(event.column).to.equal(2);
    expect(event.row).to.equal(5);
    expect(event.isInMultiAction).to.be.false;
    expect(event.state).to.be.undefined;
  });
  it('should throw a validation error on missing keydown parameters', function () {
    expect(() => new KeyUpEvent(eventMissingParameter)).to.throw(EventValidationError, /required property 'column'/);
  });
  it('should throw a validation error on wrong event type', function () {
    expect(() => new KeyUpEvent(eventInvalidType)).to.throw(EventValidationError, /must match pattern "\^keyUp\$"/);
  });
  it('should have a state set on a multi state event', function () {
    const event = new KeyUpEvent(eventValidWithState);
    expect(event.state).to.equal(0);
  });
});
