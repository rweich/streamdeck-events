import 'mocha';

import EventValidationError from '../../../src/incoming/exception/EventValidationError';
import { IncomingPropertyinspectorEvents } from '../../../src/incoming/propertyinspector/IncomingPropertyinspectorEvents';
import { SendToPropertyInspectorIncomingEvent } from '../../../src/incoming/propertyinspector';
import eventInvalidType from '../fixtures/sendToPropertyInspectorEvent.invalid-eventtype.json';
import eventMissingParameter from '../fixtures/sendToPropertyInspectorEvent.missing-param.json';
import eventValid from '../fixtures/sendToPropertyInspectorEvent.valid.json';
import { expect } from 'chai';

describe('SendToPropertyinspectorEvent test', () => {
  it('should create the event when using the correct payload', function () {
    const event = new SendToPropertyInspectorIncomingEvent(eventValid);
    expect(event.event).to.equal(IncomingPropertyinspectorEvents.SendToPropertyInspector);
    expect(event.action).to.equal('com.elgato.example.action1');
    expect(event.context).to.equal('opaqueValuePI');
  });
  it('should throw a validation error on missing parameters', function () {
    expect(() => new SendToPropertyInspectorIncomingEvent(eventMissingParameter)).to.throw(
      EventValidationError,
      /required property .*payload/,
    );
  });
  it('should throw a validation error on wrong event type', function () {
    expect(() => new SendToPropertyInspectorIncomingEvent(eventInvalidType)).to.throw(
      EventValidationError,
      /should match pattern "\^sendToPropertyInspector\$"/,
    );
  });
  it('should create the event with different valid paylods', function () {
    const payload = eventValid;
    payload.payload = { some: 'payload' };
    expect(new SendToPropertyInspectorIncomingEvent(payload).payload.some).to.equal('payload');
    payload.payload = { some: { inner: 'payload' } };
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(new SendToPropertyInspectorIncomingEvent(payload).payload.some.inner).to.equal('payload');
    payload.payload = { a: 'b', c: 'd' };
    expect(new SendToPropertyInspectorIncomingEvent(payload).payload.a).to.equal('b');
    expect(new SendToPropertyInspectorIncomingEvent(payload).payload.c).to.equal('d');
  });
});
