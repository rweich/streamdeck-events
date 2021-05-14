import 'mocha';

import EventValidationError from '@/Events/Received/exception/EventValidationError';
import { ReceivedPluginEvents } from '@/Events/Received/plugin/ReceivedPluginEvents';
import TitleParametersDidChangeEvent from '@/Events/Received/plugin/TitleParametersDidChangeEvent';
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
    expect(event.event).to.equal(ReceivedPluginEvents.TitleParametersDidChange);
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
      /should match pattern "\^propertyInspectorDidAppear\$"/,
    );
  });
});
