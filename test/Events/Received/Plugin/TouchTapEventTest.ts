import 'mocha';

import { expect } from 'chai';

import EventValidationError from '@/Events/Received/Exception/EventValidationError';
import TouchTapEvent from '@/Events/Received/Plugin/Dial/TouchTapEvent';

import eventInvalidType from '../fixtures/touchTapEvent/invalidEvent.json';
import eventMissingParameter from '../fixtures/touchTapEvent/missingTapPos.json';
import eventValid from '../fixtures/touchTapEvent/valid.json';
import eventValidHold from '../fixtures/touchTapEvent/valid.hold.json';

describe('TouchTapEvent test', () => {
  it('should handle a normal event', function () {
    const event = new TouchTapEvent(eventValid);
    expect(event.action).to.equal("ts.streamdeck.events.touchTapTest");
    expect(event.context).to.equal("FEDCBA9876543210FEDCBA9876543210");
    expect(event.device).to.equal( "0123456789ABCDEF0123456789ABCDEF");
    expect(event.event).to.equal("touchTap");
    expect(event.column).to.equal(1);
    expect(event.row).to.equal(0);
    expect(event.controller).to.equal("Encoder");

    expect(event.hold).to.be.false;
    expect(event.tapPos.length).to.equal(2);
    expect(event.tapPos[0]).to.equal(37);
    expect(event.tapPos[1]).to.equal(75);
  });

  it('should handle a tap hold event', function () {
    const event = new TouchTapEvent(eventValidHold);

    expect(event.hold).to.be.true;
  });

  it('should create the event with settings', function () {
    const event = new TouchTapEvent(eventValid);

    expect(event.settings).to.haveOwnProperty('key');
    expect((event.settings as {'key': string}).key).to.equal('value');

    expect(event.settings).to.haveOwnProperty('someNum');
    expect((event.settings as {'someNum': number}).someNum).to.equal(1234);
  });

  it('should throw a validation error on missing tapPos parameters', function () {
    expect(() => new TouchTapEvent(eventMissingParameter)).to.throw(EventValidationError, /required property 'tapPos'/);
  });

  it('should throw a validation error on wrong event type', function () {
    expect(() => new TouchTapEvent(eventInvalidType)).to.throw(EventValidationError, /must match pattern "\^touchTap\$"/);
  });
});
