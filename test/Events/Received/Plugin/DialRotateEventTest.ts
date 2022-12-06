import 'mocha';

import { expect } from 'chai';

import EventValidationError from '@/Events/Received/Exception/EventValidationError';
import DialRotateEvent from '@/Events/Received/Plugin/Dial/DialRotateEvent';

import eventInvalidType from '../fixtures/dialRotateEvent/invalidEvent.json';
import eventMissingParameter from '../fixtures/dialRotateEvent/missingTicks.json';
import eventValid from '../fixtures/dialRotateEvent/valid.json';
import eventValidCCW from '../fixtures/dialRotateEvent/valid.ccw.json';

describe('DialRotateEvent test', () => {
  it('should handle a standard rotation', function () {
    const event = new DialRotateEvent(eventValid);
    expect(event.action).to.equal("ts.streamdeck.events.dialRotateTest");
    expect(event.context).to.equal("FEDCBA9876543210FEDCBA9876543210");
    expect(event.device).to.equal( "0123456789ABCDEF0123456789ABCDEF");
    expect(event.event).to.equal("dialRotate");
    expect(event.column).to.equal(1);
    expect(event.row).to.equal(0);
    expect(event.controller).to.equal("Encoder");
    expect(event.pressed).to.be.false;
    expect(event.ticks).to.equal(1);
  });

  it('should handle a reverse rotation while pressed', function () {
    const event = new DialRotateEvent(eventValidCCW);

    expect(event.pressed).to.be.true;
    expect(event.ticks).to.equal(-1);
  });

  it('should create the event with settings', function () {
    const event = new DialRotateEvent(eventValid);

    expect(event.settings).to.haveOwnProperty('key');
    expect((event.settings as {'key': string}).key).to.equal('value');

    expect(event.settings).to.haveOwnProperty('someNum');
    expect((event.settings as {'someNum': number}).someNum).to.equal(1234);
  });

  it('should throw a validation error on missing tick parameters', function () {
    expect(() => new DialRotateEvent(eventMissingParameter)).to.throw(EventValidationError, /required property 'ticks'/);
  });

  it('should throw a validation error on wrong event type', function () {
    expect(() => new DialRotateEvent(eventInvalidType)).to.throw(EventValidationError, /must match pattern "\^dialRotate\$"/);
  });
});
