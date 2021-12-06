import 'mocha';

import EventValidationError from '@/Events/Received/Exception/EventValidationError';
import WillDisappearEvent from '@/Events/Received/Plugin/WillDisappearEvent';
import eventInvalidType from '../fixtures/willDisappearEvent.invalid-eventtype.json';
import eventMissingParameter from '../fixtures/willDisappearEvent.missing-param.json';
import eventValid from '../fixtures/willDisappearEvent.valid.json';
import eventValidMultiaction from '../fixtures/willDisappearEvent.valid.multiaction.json';
import eventValidMultiactionState from '../fixtures/willDisappearEvent.valid.multiaction.state.json';
import eventValidState from '../fixtures/willDisappearEvent.valid.state.json';
import { expect } from 'chai';

describe('WillDisappearEvent test', () => {
  it('should create the event when using the correct payload', function () {
    const event = new WillDisappearEvent(eventValid);
    expect(event.event).to.equal('willDisappear');
    expect(event.action).to.equal('dsaaction');
    expect(event.context).to.equal('disacontext');
    expect(event.state).to.be.undefined;
    expect(event.isInMultiAction).to.be.false;
    expect(event.column).to.equal(1);
    expect(event.row).to.equal(0);
  });
  it('should create the event when using the correct payload (with state)', function () {
    const event = new WillDisappearEvent(eventValidState);
    expect(event.event).to.equal('willDisappear');
    expect(event.action).to.equal('dsaaction');
    expect(event.context).to.equal('disacontext');
    expect(event.state).to.equal(1);
    expect(event.isInMultiAction).to.be.false;
    expect(event.column).to.equal(5);
    expect(event.row).to.equal(3);
  });
  it('should create the event when using the correct multiaction payload', function () {
    const event = new WillDisappearEvent(eventValidMultiaction);
    expect(event.event).to.equal('willDisappear');
    expect(event.action).to.equal('aaa.action');
    expect(event.context).to.equal('asdf');
    expect(event.device).to.equal('fasd');
    expect(event.state).to.be.undefined;
    expect(event.isInMultiAction).to.be.true;
    expect(event.column).to.be.undefined;
    expect(event.row).to.be.undefined;
    expect(Object.keys(event.settings as Record<string, unknown>)).to.be.length(0);
  });
  it('should create the event when using the correct multiaction payload (with state)', function () {
    const event = new WillDisappearEvent(eventValidMultiactionState);
    expect(event.event).to.equal('willDisappear');
    expect(event.action).to.equal('aaa.action');
    expect(event.context).to.equal('asdf');
    expect(event.device).to.equal('fasd');
    expect(event.state).to.equal(0);
    expect(event.isInMultiAction).to.be.true;
    expect(event.column).to.be.undefined;
    expect(event.row).to.be.undefined;
    expect(Object.keys(event.settings as Record<string, unknown>)).to.be.length(0);
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
