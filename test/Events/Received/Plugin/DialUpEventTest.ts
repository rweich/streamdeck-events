import 'mocha';

import { expect } from 'chai';

import EventValidationError from '@/Events/Received/Exception/EventValidationError';
import DialUpEvent from '@/Events/Received/Plugin/Dial/DialUpEvent';

import eventInvalidType from '../fixtures/dialUpEvent/invalidEvent.json';
import eventValid from '../fixtures/dialUpEvent/valid.json';

describe('DialUpEvent test', () => {
  it('should create the event when using the correct payload', function () {
    const event = new DialUpEvent(eventValid);
    expect(event.action).to.equal('ts.streamdeck.events.dialUpTest');
    expect(event.context).to.equal('FEDCBA9876543210FEDCBA9876543210');
    expect(event.device).to.equal('0123456789ABCDEF0123456789ABCDEF');
    expect(event.event).to.equal('dialUp');
    expect(event.column).to.equal(1);
    expect(event.row).to.equal(0);
    expect(event.controller).to.equal('Encoder');
  });
  it('should create the event with settings', function () {
    const event = new DialUpEvent(eventValid);

    expect(event.settings).to.haveOwnProperty('key');
    expect((event.settings as { key: string }).key).to.equal('value');

    expect(event.settings).to.haveOwnProperty('someNum');
    expect((event.settings as { someNum: number }).someNum).to.equal(1234);
  });
  it('should throw a validation error on wrong event type', function () {
    expect(() => new DialUpEvent(eventInvalidType)).to.throw(EventValidationError, /must match pattern "\^dialUp\$"/);
  });
});
