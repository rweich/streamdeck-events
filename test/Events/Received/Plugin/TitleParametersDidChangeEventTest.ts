import 'mocha';

import EventValidationError from '@/Events/Received/Exception/EventValidationError';
import TitleParametersDidChangeEvent from '@/Events/Received/Plugin/TitleParametersDidChangeEvent';
import eventInvalidType from '../fixtures/titleParametersDidChangeEvent.invalid-eventtype.json';
import eventMissingParameter from '../fixtures/titleParametersDidChangeEvent.missing-param.json';
import eventValid from '../fixtures/titleParametersDidChangeEvent.valid.json';
import { expect } from 'chai';

describe.skip('TitleParametersDidChangeEvent test', () => {
  it('should create the event when using the correct payload', function () {
    const event = new TitleParametersDidChangeEvent(eventValid);
    expect(event.action).to.equal('tpdc.action');
    expect(event.context).to.equal('conconcon');
    expect(event.device).to.equal('devved');
    expect(event.event).to.equal('titleParametersDidChange');
    // TODO: add missing tests
  });
  it('should throw a validation error on missing parameters', function () {
    expect(() => new TitleParametersDidChangeEvent(eventMissingParameter)).to.throw(
      EventValidationError,
      /required property 'context'/,
    );
  });
  it('should throw a validation error on wrong event type', function () {
    expect(() => new TitleParametersDidChangeEvent(eventInvalidType)).to.throw(
      EventValidationError,
      /must match pattern "\^titleParametersDidChange\$"/,
    );
  });
});
