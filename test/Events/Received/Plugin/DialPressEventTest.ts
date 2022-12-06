import 'mocha';

import { expect } from 'chai';

import EventValidationError from '@/Events/Received/Exception/EventValidationError';
import DialPressEvent from '@/Events/Received/Plugin/Dial/DialPressEvent';

import eventInvalidType from '../fixtures/dialPressEvent/invalidEvent.json';
import eventMissingParameter from '../fixtures/dialPressEvent/missingPressed.json';
import eventValid from '../fixtures/dialPressEvent/valid.json';
import eventValidRelease from '../fixtures/dialPressEvent/valid.dialRelease.json';

describe('DialPressEvent test', () => {
  it('should create the event when using the correct payload', function () {
    const event = new DialPressEvent(eventValid);
    expect(event.action).to.equal("ts.streamdeck.events.dialPressTest");
    expect(event.context).to.equal("FEDCBA9876543210FEDCBA9876543210");
    expect(event.device).to.equal( "0123456789ABCDEF0123456789ABCDEF");
    expect(event.event).to.equal("dialPress");
    expect(event.column).to.equal(1);
    expect(event.row).to.equal(0);
    expect(event.controller).to.equal("Encoder");
    expect(event.pressed).to.be.true;
  });
  it('should create the event when using the correct payload (when released)', function () {
    const event = new DialPressEvent(eventValidRelease);

    // only testing this, as everything else was tested above
    expect(event.pressed).to.be.false;
  });
  it('should create the event with settings', function () {
    const event = new DialPressEvent(eventValid);

    expect(event.settings).to.haveOwnProperty('key');
    expect((event.settings as {'key': string}).key).to.equal('value');

    expect(event.settings).to.haveOwnProperty('someNum');
    expect((event.settings as {'someNum': number}).someNum).to.equal(1234);

  });
  it('should throw a validation error on missing pressed parameter', function () {
    expect(() => new DialPressEvent(eventMissingParameter)).to.throw(EventValidationError, /required property 'pressed'/);
  });
  it('should throw a validation error on wrong event type', function () {
    expect(() => new DialPressEvent(eventInvalidType)).to.throw(EventValidationError, /must match pattern "\^dialPress\$"/);
  });
});
