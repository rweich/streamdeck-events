import EventValidationError from '@/Events/Received/Exception/EventValidationError';
import { SendToPluginEvent } from '@/Events/Streamdeck/Received';
import eventInvalidType from './fixtures/sendToPluginEvent.invalid-eventtype.json';
import eventMissingParameter from './fixtures/sendToPluginEvent.missing-param.json';
import eventValid from './fixtures/sendToPluginEvent.valid.json';
import { expect } from 'chai';

describe('SendToPluginEvent Test', () => {
  it('should create the event when using the correct payload', function () {
    const event = new SendToPluginEvent(eventValid);
    expect(event.event).to.equal('sendToPlugin');
    expect(event.context).to.equal('opaqueValue');
    expect(event.action).to.equal('com.elgato.example.action1');
    expect((event.payload as { some: string }).some).to.equal('<json data>');
  });
  it('should throw a validation error on missing parameters', function () {
    expect(() => new SendToPluginEvent(eventMissingParameter)).to.throw(
      EventValidationError,
      /required property 'payload'/,
    );
  });
  it('should throw a validation error on wrong event type', function () {
    expect(() => new SendToPluginEvent(eventInvalidType)).to.throw(
      EventValidationError,
      /must match pattern "\^sendToPlugin\$"/,
    );
  });
});
