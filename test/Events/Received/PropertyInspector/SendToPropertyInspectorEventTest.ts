import 'mocha';

import { expect } from 'chai';

import EventValidationError from '@/Events/Received/Exception/EventValidationError';
import { SendToPropertyInspectorEvent } from '@/Events/Received/PropertyInspector';

import eventInvalidType from '../fixtures/sendToPropertyInspectorEvent.invalid-eventtype.json';
import eventMissingParameter from '../fixtures/sendToPropertyInspectorEvent.missing-param.json';
import eventValid from '../fixtures/sendToPropertyInspectorEvent.valid.json';

describe('SendToPropertyinspectorEvent test', () => {
  it('should create the event when using the correct payload', function () {
    const event = new SendToPropertyInspectorEvent(eventValid);
    expect(event.event).to.equal('sendToPropertyInspector');
    expect(event.action).to.equal('com.elgato.example.action1');
    expect(event.context).to.equal('opaqueValuePI');
  });
  it('should throw a validation error on missing parameters', function () {
    expect(() => new SendToPropertyInspectorEvent(eventMissingParameter)).to.throw(
      EventValidationError,
      /required property .*payload/,
    );
  });
  it('should throw a validation error on wrong event type', function () {
    expect(() => new SendToPropertyInspectorEvent(eventInvalidType)).to.throw(
      EventValidationError,
      /must match pattern "\^sendToPropertyInspector\$"/,
    );
  });
  it('should create the event with different valid paylods', function () {
    const payload = eventValid;
    payload.payload = { some: 'payload' };
    expect(new SendToPropertyInspectorEvent(payload).payload.some).to.equal('payload');
    payload.payload = { some: { inner: 'payload' } };
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(new SendToPropertyInspectorEvent(payload).payload.some.inner).to.equal('payload');
    payload.payload = { a: 'b', c: 'd' };
    expect(new SendToPropertyInspectorEvent(payload).payload.a).to.equal('b');
    expect(new SendToPropertyInspectorEvent(payload).payload.c).to.equal('d');
  });
});
