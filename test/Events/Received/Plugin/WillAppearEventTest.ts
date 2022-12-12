import 'mocha';

import { expect } from 'chai';

import EventValidationError from '@/Events/Received/Exception/EventValidationError';
import { ControllerType } from '@/Events/Received/Plugin/ControllerType';
import WillAppearEvent from '@/Events/Received/Plugin/WillAppearEvent';

import eventInvalidType from '../fixtures/willAppearEvent.invalid-eventtype.json';
import eventMissingParameter from '../fixtures/willAppearEvent.missing-param.json';
import eventValid from '../fixtures/willAppearEvent.valid.json';
import eventValidMultiAction from '../fixtures/willAppearEvent.valid.multiaction.json';
import eventValidMultiActionState from '../fixtures/willAppearEvent.valid.multiaction.state.json';
import eventValidState from '../fixtures/willAppearEvent.valid.state.json';
import eventValidController from '../fixtures/willAppearEvent.valid.withcontroller.json';

describe('WillAppearEvent test', () => {
  it('should create the event when using the correct payload', function () {
    const event = new WillAppearEvent(eventValid);
    expect(event.event).to.equal('willAppear');
    expect(event.action).to.equal('my.willappear.action');
    expect(event.context).to.equal('willappearcontext');
    expect(event.state).to.be.undefined;
    expect(event.isInMultiAction).to.be.false;
    expect(event.row).to.equal(0);
    expect(event.column).to.equal(1);
    expect(Object.keys(event.settings as Record<string, unknown>)).to.be.length(0);
  });
  it('should create the event when using the correct payload (with state)', function () {
    const event = new WillAppearEvent(eventValidState);
    expect(event.event).to.equal('willAppear');
    expect(event.action).to.equal('my.willappear.action');
    expect(event.context).to.equal('willappearcontext');
    expect(event.state).to.equal(1);
    expect(event.isInMultiAction).to.be.false;
    expect(event.row).to.equal(3);
    expect(event.column).to.equal(5);
    expect(Object.keys(event.settings as Record<string, unknown>)).to.be.length(0);
  });
  it('should create the event when using the correct multiaction payload', function () {
    const event = new WillAppearEvent(eventValidMultiAction);
    expect(event.event).to.equal('willAppear');
    expect(event.action).to.equal('my.willappear.action');
    expect(event.context).to.equal('willappearcontext');
    expect(event.state).to.be.undefined;
    expect(event.isInMultiAction).to.be.true;
    expect(event.column).to.be.undefined;
    expect(event.row).to.be.undefined;
    expect(Object.keys(event.settings as Record<string, unknown>)).to.be.length(0);
  });
  it('should create the event when using the correct multiaction payload (with state)', function () {
    const event = new WillAppearEvent(eventValidMultiActionState);
    expect(event.event).to.equal('willAppear');
    expect(event.action).to.equal('my.willappear.action');
    expect(event.context).to.equal('willappearcontext');
    expect(event.state).to.equal(0);
    expect(event.isInMultiAction).to.be.true;
    expect(event.column).to.be.undefined;
    expect(event.row).to.be.undefined;
    expect(Object.keys(event.settings as Record<string, unknown>)).to.be.length(0);
  });
  it('should set Controller to Keypad if unset', () => {
    const event = new WillAppearEvent(eventValid);
    expect(event.controller).to.equal(ControllerType.Keypad);
  });
  it('should set Controller appropriately if set', () => {
    const event = new WillAppearEvent(eventValidController);
    expect(event.controller).to.equal(ControllerType.Encoder);
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
