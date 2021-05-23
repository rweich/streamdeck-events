import EventValidationError from '@/Events/Received/Exception/EventValidationError';
import { SetImageEvent } from '@/Events/Streamdeck/Received';
import { TargetEnum } from '@/Events/Sent/Plugin';
import eventInvalidType from './fixtures/setImageEvent.invalid-eventtype.json';
import eventMissingParameter from './fixtures/setImageEvent.missing-param.json';
import eventValid from './fixtures/setImageEvent.valid.json';
import { expect } from 'chai';

describe('SetImageEvent Test', () => {
  it('should create the event when using the correct payload', function () {
    const event = new SetImageEvent(eventValid);
    expect(event.event).to.equal('setImage');
    expect(event.context).to.equal('opaqueValue');
    expect(event.state).to.equal(1);
    expect(event.target).to.equal(TargetEnum.Both);
    expect(event.image).to.equal('<base64 encoded image>');
  });
  it('should throw a validation error on missing parameters', function () {
    expect(() => new SetImageEvent(eventMissingParameter)).to.throw(EventValidationError, /required property 'image'/);
  });
  it('should throw a validation error on wrong event type', function () {
    expect(() => new SetImageEvent(eventInvalidType)).to.throw(
      EventValidationError,
      /must match pattern "\^setImage\$"/,
    );
  });
});
