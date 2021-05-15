import EventValidationError from '@/Events/Received/Exception/EventValidationError';
import OpenUrlEvent from '@/Events/Streamdeck/Received/OpenUrlEvent';
import { ReceivedStreamdeckEvents } from '@/Events/Streamdeck/Received/ReceivedStreamdeckEvents';
import eventInvalidType from './fixtures/openUrlEvent.invalid-eventtype.json';
import eventMissingParameter from './fixtures/openUrlEvent.missing-param.json';
import eventValid from './fixtures/openUrlEvent.valid.json';
import { expect } from 'chai';

describe('OpenUrlEvent Test', () => {
  it('should create the event when using the correct payload', function () {
    const event = new OpenUrlEvent(eventValid);
    expect(event.event).to.equal(ReceivedStreamdeckEvents.OpenUrl);
    expect(event.url).to.equal('https://www.elgato.com');
  });
  it('should throw a validation error on missing parameters', function () {
    expect(() => new OpenUrlEvent(eventMissingParameter)).to.throw(EventValidationError, /required property 'url'/);
  });
  it('should throw a validation error on wrong event type', function () {
    expect(() => new OpenUrlEvent(eventInvalidType)).to.throw(
      EventValidationError,
      /should match pattern "\^openUrl\$"/,
    );
  });
});
