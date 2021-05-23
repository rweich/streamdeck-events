import 'mocha';

import EventValidationError from '@/Events/Received/Exception/EventValidationError';
import SendToPluginEvent from '@/Events/Received/Plugin/SendToPluginEvent';
import eventInvalidType from '../fixtures/sendToPluginEvent.invalid-eventtype.json';
import eventMissingParameter from '../fixtures/sendToPluginEvent.missing-param.json';
import eventValid from '../fixtures/sendToPluginEvent.valid.json';
import { expect } from 'chai';

describe('SendToPluginEvent test', () => {
  it('should create the event when using the correct payload', function () {
    const event = new SendToPluginEvent(eventValid);
    expect(event.event).to.equal('sendToPlugin');
    expect(event.action).to.equal('com.elgato.example.action1');
    expect(event.context).to.equal('opaqueValue312');
  });
  it('should throw a validation error on missing parameters', function () {
    expect(() => new SendToPluginEvent(eventMissingParameter)).to.throw(
      EventValidationError,
      /required property .*payload/,
    );
  });
  it('should throw a validation error on wrong event type', function () {
    expect(() => new SendToPluginEvent(eventInvalidType)).to.throw(
      EventValidationError,
      /must match pattern "\^sendToPlugin\$"/,
    );
  });
  it('should create the event with different valid paylods', function () {
    const payload = eventValid;
    payload.payload = { some: 'payload' };
    expect(new SendToPluginEvent(payload).payload.some).to.equal('payload');
    payload.payload = { some: { inner: 'payload' } };
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(new SendToPluginEvent(payload).payload.some.inner).to.equal('payload');
    payload.payload = { a: 'b', c: 'd' };
    expect(new SendToPluginEvent(payload).payload.a).to.equal('b');
    expect(new SendToPluginEvent(payload).payload.c).to.equal('d');
  });
});
