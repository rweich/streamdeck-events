import { expect } from 'chai';

import EventValidationError from '@/Events/Received/Exception/EventValidationError';
import { RegisterEvent } from '@/Events/Streamdeck/Received';

import eventInvalidType from './fixtures/registerEvent.invalid-eventtype.json';
import eventMissingParameter from './fixtures/registerEvent.missing-param.json';
import eventValid from './fixtures/registerEvent.valid.json';

describe('RegisterEvent Test', () => {
  it('should create the event when using the correct payload', function () {
    const event = new RegisterEvent(eventValid);
    expect(event.event).to.equal('register');
    expect(event.inRegisterEvent).to.equal('inRegisterEvent');
    expect(event.uuid).to.equal('inPluginUUID');
  });
  it('should create the event as long register is somewhere in the event name', function () {
    const event = new RegisterEvent(eventValid);
    eventValid.event = 'register';
    expect(event.inRegisterEvent).to.equal('register');
    eventValid.event = 'Register';
    expect(event.inRegisterEvent).to.equal('Register');
    eventValid.event = 'myRegisterPlugin';
    expect(event.inRegisterEvent).to.equal('myRegisterPlugin');
    eventValid.event = 'fooFaRegister';
    expect(event.inRegisterEvent).to.equal('fooFaRegister');
  });
  it('should throw a validation error on missing parameters', function () {
    expect(() => new RegisterEvent(eventMissingParameter)).to.throw(EventValidationError, /required property 'uuid'/);
  });
  it('should throw a validation error on wrong event type', function () {
    expect(() => new RegisterEvent(eventInvalidType)).to.throw(
      EventValidationError,
      /must match pattern "\[Rr]egister"/,
    );
  });
});
