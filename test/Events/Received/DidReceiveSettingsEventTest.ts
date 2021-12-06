import 'mocha';

import DidReceiveSettingsEvent from '@/Events/Received/DidReceiveSettingsEvent';
import EventValidationError from '@/Events/Received/Exception/EventValidationError';
import eventInvalidType from './fixtures/didReceiveSettingsEvent.invalid-eventtype.json';
import eventMissingParameter from './fixtures/didReceiveSettingsEvent.missing-param.json';
import eventValid from './fixtures/didReceiveSettingsEvent.valid.json';
import eventValidMultiaction from './fixtures/didReceiveSettingsEvent.valid.multiaction.json';
import eventValidMultiactionState from './fixtures/didReceiveSettingsEvent.valid.multiaction.state.json';
import eventValidState from './fixtures/didReceiveSettingsEvent.valid.state.json';
import { expect } from 'chai';

describe('DidReceiveSettingsEvent test', () => {
  it('should create the event when using the correct payload', function () {
    const event = new DidReceiveSettingsEvent(eventValid);
    expect(event.action).to.equal('com.elgato.example.action1');
    expect(event.context).to.equal('aopaqueValue');
    expect(event.device).to.equal('adevice');
    expect(event.event).to.equal('didReceiveSettings');
    expect(event.column).to.equal(3);
    expect(event.row).to.equal(1);
    expect(event.isInMultiAction).to.be.false;
    expect(event.state).to.be.undefined;
    expect(Object.keys(event.settings as Record<string, unknown>)).to.be.length(0);
  });
  it('should create the event when using the correct payload (with state)', function () {
    const event = new DidReceiveSettingsEvent(eventValidState);
    expect(event.action).to.equal('com.elgato.example.action1');
    expect(event.context).to.equal('aopaqueValue');
    expect(event.device).to.equal('adevice');
    expect(event.event).to.equal('didReceiveSettings');
    expect(event.column).to.equal(4);
    expect(event.row).to.equal(3);
    expect(event.isInMultiAction).to.be.false;
    expect(event.state).to.equal(1);
    expect(Object.keys(event.settings as Record<string, unknown>)).to.be.length(0);
  });
  it('should create the event when using the correct payload in a multiaction', function () {
    const event = new DidReceiveSettingsEvent(eventValidMultiaction);
    expect(event.action).to.equal('com.elgato.example.action1');
    expect(event.context).to.equal('aopaqueValue');
    expect(event.device).to.equal('adevice');
    expect(event.event).to.equal('didReceiveSettings');
    expect(event.column).to.be.undefined;
    expect(event.row).to.be.undefined;
    expect(event.isInMultiAction).to.be.true;
    expect(event.state).to.be.undefined;
    expect(Object.keys(event.settings as Record<string, unknown>)).to.be.length(0);
  });
  it('should create the event when using the correct payload in a multiaction (with state)', function () {
    const event = new DidReceiveSettingsEvent(eventValidMultiactionState);
    expect(event.action).to.equal('com.elgato.example.action1');
    expect(event.context).to.equal('aopaqueValue');
    expect(event.device).to.equal('adevice');
    expect(event.event).to.equal('didReceiveSettings');
    expect(event.column).to.be.undefined;
    expect(event.row).to.be.undefined;
    expect(event.isInMultiAction).to.be.true;
    expect(event.state).to.equal(0);
    expect(Object.keys(event.settings as Record<string, unknown>)).to.be.length(0);
  });
  it('should throw a validation error on missing parameters', function () {
    expect(() => new DidReceiveSettingsEvent(eventMissingParameter)).to.throw(EventValidationError, /device/);
  });
  it('should throw a validation error on wrong event type', function () {
    expect(() => new DidReceiveSettingsEvent(eventInvalidType)).to.throw(
      EventValidationError,
      /must match pattern "\^didReceiveSettings\$"/,
    );
  });
});
