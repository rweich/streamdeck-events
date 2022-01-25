import { expect } from 'chai';

import EventValidationError from '@/Events/Received/Exception/EventValidationError';
import OpenUrlEvent from '@/Events/Streamdeck/Received/OpenUrlEvent';

import eventInvalidType from './fixtures/openUrlEvent.invalid-eventtype.json';
import eventMissingParameter from './fixtures/openUrlEvent.missing-param.json';
import eventValid from './fixtures/openUrlEvent.valid.json';

describe('OpenUrlEvent Test', () => {
  it('should create the event when using the correct payload', function () {
    const event = new OpenUrlEvent(eventValid);
    expect(event.event).to.equal('openUrl');
    expect(event.url).to.equal('https://www.elgato.com');
  });
  it('should throw a validation error on missing parameters', function () {
    expect(() => new OpenUrlEvent(eventMissingParameter)).to.throw(EventValidationError, /required property 'url'/);
  });
  it('should throw a validation error on wrong event type', function () {
    expect(() => new OpenUrlEvent(eventInvalidType)).to.throw(EventValidationError, /must match pattern "\^openUrl\$"/);
  });
});
