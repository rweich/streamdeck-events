import 'mocha';

import { expect } from 'chai';

import EventValidationError from '@/Events/Received/Exception/EventValidationError';
import TitleParametersDidChangeEvent from '@/Events/Received/Plugin/TitleParametersDidChangeEvent';

import eventInvalidType from '../fixtures/titleParametersDidChangeEvent.invalid-eventtype.json';
import eventMissingParameter from '../fixtures/titleParametersDidChangeEvent.missing-param.json';
import eventValid from '../fixtures/titleParametersDidChangeEvent.valid.json';

describe('TitleParametersDidChangeEvent test', () => {
  it('should create the event when using the correct payload', function () {
    const event = new TitleParametersDidChangeEvent(eventValid);
    expect(event.action).to.equal('tpdc.action');
    expect(event.context).to.equal('conconcon');
    expect(event.device).to.equal('devved');
    expect(event.event).to.equal('titleParametersDidChange');
    expect(event.column).to.equal(1);
    expect(event.row).to.equal(4);
    expect(Object.keys(event.settings as Record<string, unknown>)).to.be.length(0);
    expect(event.state).to.equal(0);
    expect(event.title).to.equal('a title');
    expect(event.fontFamily).to.equal('font');
    expect(event.fontSize).to.equal(13);
    expect(event.fontStyle).to.equal('bold');
    expect(event.fontUnderline).to.equal(false);
    expect(event.showTitle).to.equal(true);
    expect(event.titleAlignment).to.equal('middle');
    expect(event.titleColor).to.equal('#ffffff');
  });
  it('should throw a validation error on missing parameters', function () {
    expect(() => new TitleParametersDidChangeEvent(eventMissingParameter)).to.throw(
      EventValidationError,
      /required property 'fontSize'/,
    );
  });
  it('should throw a validation error on wrong event type', function () {
    expect(() => new TitleParametersDidChangeEvent(eventInvalidType)).to.throw(
      EventValidationError,
      /must match pattern "\^titleParametersDidChange\$"/,
    );
  });
});
