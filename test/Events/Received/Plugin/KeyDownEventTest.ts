import 'mocha';

import { expect } from 'chai';

import EventValidationError from '@/Events/Received/Exception/EventValidationError';
import KeyDownEvent from '@/Events/Received/Plugin/KeyDownEvent';

import eventInvalidType from '../fixtures/keyDownEvent.invalid-eventtype.json';
import eventMissingParameter from '../fixtures/keyDownEvent.missing-param.json';
import eventValid from '../fixtures/keyDownEvent.valid.json';
import eventValidMultiaction from '../fixtures/keyDownEvent.valid.multiaction.json';
import eventValidMultiactionState from '../fixtures/keyDownEvent.valid.multiaction.state.json';
import eventValidState from '../fixtures/keyDownEvent.valid.state.json';

describe('KeyDownEvent test', () => {
  it('should create the event when using the correct payload', function () {
    const event = new KeyDownEvent(eventValid);
    expect(event.action).to.equal('some.action');
    expect(event.context).to.equal('ewrwerwerwerwer');
    expect(event.device).to.equal('xxzxxzxzxzxxzxzxz');
    expect(event.event).to.equal('keyDown');
    expect(event.column).to.equal(1);
    expect(event.row).to.equal(3);
    expect(event.isInMultiAction).to.be.false;
    expect(event.state).to.be.undefined;
    expect(event.userDesiredState).to.be.undefined;
  });
  it('should create the event when using the correct payload with state', function () {
    const event = new KeyDownEvent(eventValidState);
    expect(event.action).to.equal('some.action');
    expect(event.context).to.equal('ewrwerwerwerwer');
    expect(event.device).to.equal('xxzxxzxzxzxxzxzxz');
    expect(event.event).to.equal('keyDown');
    expect(event.column).to.equal(2);
    expect(event.row).to.equal(4);
    expect(event.isInMultiAction).to.be.false;
    expect(event.state).to.equal(1);
    expect(event.userDesiredState).to.be.undefined;
  });
  it('should create the event when using the correct payload in a multiaction', function () {
    const event = new KeyDownEvent(eventValidMultiaction);
    expect(event.action).to.equal('some.action');
    expect(event.context).to.equal('ewrwerwerwerwer');
    expect(event.device).to.equal('xxzxxzxzxzxxzxzxz');
    expect(event.event).to.equal('keyDown');
    expect(event.column).to.be.undefined;
    expect(event.row).to.be.undefined;
    expect(event.isInMultiAction).to.be.true;
    expect(event.state).to.be.undefined;
    expect(event.userDesiredState).to.equal(0);
  });
  it('should create the event when using the correct payload in a multiaction (with state)', function () {
    const event = new KeyDownEvent(eventValidMultiactionState);
    expect(event.action).to.equal('some.action');
    expect(event.context).to.equal('ewrwerwerwerwer');
    expect(event.device).to.equal('xxzxxzxzxzxxzxzxz');
    expect(event.event).to.equal('keyDown');
    expect(event.column).to.be.undefined;
    expect(event.row).to.be.undefined;
    expect(event.isInMultiAction).to.be.true;
    expect(event.state).to.equal(1);
    expect(event.userDesiredState).to.equal(0);
  });
  it('should throw a validation error on missing keydown parameters', function () {
    expect(() => new KeyDownEvent(eventMissingParameter)).to.throw(EventValidationError, /required property 'context'/);
  });
  it('should throw a validation error on wrong event type', function () {
    expect(() => new KeyDownEvent(eventInvalidType)).to.throw(EventValidationError, /must match pattern "\^keyDown\$"/);
  });
});
