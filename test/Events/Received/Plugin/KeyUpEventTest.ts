import 'mocha';

import { expect } from 'chai';

import EventValidationError from '@/Events/Received/Exception/EventValidationError';
import KeyUpEvent from '@/Events/Received/Plugin/KeyUpEvent';

import eventInvalidType from '../fixtures/keyUpEvent.invalid-eventtype.json';
import eventMissingParameter from '../fixtures/keyUpEvent.missing-param.json';
import eventValid from '../fixtures/keyUpEvent.valid.json';
import eventValidMultiaction from '../fixtures/keyUpEvent.valid.multiaction.json';
import eventValidMultiactionState from '../fixtures/keyUpEvent.valid.multiaction.state.json';
import eventValidStateIs2 from '../fixtures/keyUpEvent.valid.state.is2.json';
import eventValidState from '../fixtures/keyUpEvent.valid.state.json';

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
    expect(event.userDesiredState).to.be.undefined;
  });
  it('should create the event when using the correct payload (with state)', function () {
    const event = new KeyUpEvent(eventValidState);
    expect(event.action).to.equal('some.up.action');
    expect(event.context).to.equal('zxcvfsda');
    expect(event.device).to.equal('rweqasd');
    expect(event.event).to.equal('keyUp');
    expect(event.column).to.equal(3);
    expect(event.row).to.equal(3);
    expect(event.isInMultiAction).to.be.false;
    expect(event.state).to.equal(0);
    expect(event.userDesiredState).to.be.undefined;
  });
  it('should create the event when using the correct payload in a multiaction', function () {
    const event = new KeyUpEvent(eventValidMultiaction);
    expect(event.action).to.equal('some.up.action');
    expect(event.context).to.equal('zxcvfsda');
    expect(event.device).to.equal('rweqasd');
    expect(event.event).to.equal('keyUp');
    expect(event.column).to.be.undefined;
    expect(event.row).to.be.undefined;
    expect(event.isInMultiAction).to.be.true;
    expect(event.state).to.be.undefined;
    expect(event.userDesiredState).to.equal(0);
  });
  it('should create the event when using the correct payload in a multiaction (with state)', function () {
    const event = new KeyUpEvent(eventValidMultiactionState);
    expect(event.action).to.equal('some.up.action');
    expect(event.context).to.equal('zxcvfsda');
    expect(event.device).to.equal('rweqasd');
    expect(event.event).to.equal('keyUp');
    expect(event.column).to.be.undefined;
    expect(event.row).to.be.undefined;
    expect(event.isInMultiAction).to.be.true;
    expect(event.state).to.equal(1);
    expect(event.userDesiredState).to.equal(0);
  });
  it('should allow the state to be >= 1', function () {
    const event = new KeyUpEvent(eventValidStateIs2);
    expect(event.action).to.equal('dev.com.test');
    expect(event.context).to.equal('fasdasdf');
    expect(event.device).to.equal('rweqqwer');
    expect(event.event).to.equal('keyUp');
    expect(event.column).to.equal(2);
    expect(event.row).to.equal(2);
    expect(event.isInMultiAction).to.be.false;
    expect(event.state).to.equal(2);
    expect(event.userDesiredState).to.be.undefined;
  });
  it('should throw a validation error on missing keydown parameters', function () {
    expect(() => new KeyUpEvent(eventMissingParameter)).to.throw(EventValidationError, /required property 'column'/);
  });
  it('should throw a validation error on wrong event type', function () {
    expect(() => new KeyUpEvent(eventInvalidType)).to.throw(EventValidationError, /must match pattern "\^keyUp\$"/);
  });
});
