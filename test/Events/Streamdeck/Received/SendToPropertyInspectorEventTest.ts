import EventValidationError from '@/Events/Received/Exception/EventValidationError';
import { SendToPropertyInspectorEvent } from '@/Events/Streamdeck/Received';
import eventInvalidType from './fixtures/sendToPropertyInspectorEvent.invalid-eventtype.json';
import eventMissingParameter from './fixtures/sendToPropertyInspectorEvent.missing-param.json';
import eventValid from './fixtures/sendToPropertyInspectorEvent.valid.json';
import { expect } from 'chai';

describe('SendToPropertyInspectorEvent Test', () => {
  it('should create the event when using the correct payload', function () {
    const event = new SendToPropertyInspectorEvent(eventValid);
    expect(event.event).to.equal('sendToPropertyInspector');
    expect(event.context).to.equal('opaqueValue');
    expect(event.action).to.equal('com.elgato.example.action1');
    expect((event.payload as { data: string }).data).to.equal('<json data>');
  });
  it('should throw a validation error on missing parameters', function () {
    expect(() => new SendToPropertyInspectorEvent(eventMissingParameter)).to.throw(
      EventValidationError,
      /required property 'payload'/,
    );
  });
  it('should throw a validation error on wrong event type', function () {
    expect(() => new SendToPropertyInspectorEvent(eventInvalidType)).to.throw(
      EventValidationError,
      /should match pattern "\^sendToPropertyInspector\$"/,
    );
  });
});
