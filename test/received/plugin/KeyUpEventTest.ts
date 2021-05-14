import 'mocha';

import EventValidationError from '@/Events/Received/exception/EventValidationError';
import KeyUpEvent from '@/Events/Received/plugin/KeyUpEvent';
import { ReceivedPluginEvents } from '@/Events/Received/plugin/ReceivedPluginEvents';
import eventInvalidType from '../fixtures/keyUpEvent.invalid-eventtype.json';
import eventMissingParameter from '../fixtures/keyUpEvent.missing-param.json';
import eventValid from '../fixtures/keyUpEvent.valid.json';
import { expect } from 'chai';

describe('KeyUpEvent test', () => {
  it('should create the event when using the correct payload', function () {
    const event = new KeyUpEvent(eventValid);
    expect(event.action).to.equal('some.up.action');
    expect(event.context).to.equal('zxcvfsda');
    expect(event.device).to.equal('rweqasd');
    expect(event.event).to.equal(ReceivedPluginEvents.KeyUp);
    expect(event.column).to.equal(2);
    expect(event.row).to.equal(5);
    expect(event.isInMultiAction).to.be.false;
  });
  it('should throw a validation error on missing keydown parameters', function () {
    expect(() => new KeyUpEvent(eventMissingParameter)).to.throw(EventValidationError, /required property 'column'/);
  });
  it('should throw a validation error on wrong event type', function () {
    expect(() => new KeyUpEvent(eventInvalidType)).to.throw(EventValidationError, /should match pattern "\^keyUp\$"/);
  });
});
