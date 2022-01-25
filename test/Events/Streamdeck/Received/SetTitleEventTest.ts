import { expect } from 'chai';

import EventValidationError from '@/Events/Received/Exception/EventValidationError';
import { TargetEnum } from '@/Events/Sent/Plugin';
import { SetTitleEvent } from '@/Events/Streamdeck/Received';

import eventInvalidType from './fixtures/setTitleEvent.invalid-eventtype.json';
import eventMissingParameter from './fixtures/setTitleEvent.missing-param.json';
import eventValid from './fixtures/setTitleEvent.valid.json';

describe('SetTitleEvent Test', () => {
  it('should create the event when using the correct payload', function () {
    const event = new SetTitleEvent(eventValid);
    expect(event.event).to.equal('setTitle');
    expect(event.context).to.equal('opaqueValue');
    expect(event.state).to.equal(0);
    expect(event.target).to.equal(TargetEnum.Software);
    expect(event.title).to.equal('MyTitle');
  });
  it('should throw a validation error on missing parameters', function () {
    expect(() => new SetTitleEvent(eventMissingParameter)).to.throw(EventValidationError, /required property 'title'/);
  });
  it('should throw a validation error on wrong event type', function () {
    expect(() => new SetTitleEvent(eventInvalidType)).to.throw(
      EventValidationError,
      /must match pattern "\^setTitle\$"/,
    );
  });
});
