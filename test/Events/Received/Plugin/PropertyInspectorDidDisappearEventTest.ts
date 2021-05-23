import 'mocha';

import EventValidationError from '@/Events/Received/Exception/EventValidationError';
import PropertyInspectorDidDisappearEvent from '@/Events/Received/Plugin/PropertyInspectorDidDisappearEvent';
import eventInvalidType from '../fixtures/propertyInspectorDidDisappearEvent.invalid-eventtype.json';
import eventMissingParameter from '../fixtures/propertyInspectorDidDisappearEvent.missing-param.json';
import eventValid from '../fixtures/propertyInspectorDidDisappearEvent.valid.json';
import { expect } from 'chai';

describe('PropertyInspectorDidDisappearEvent test', () => {
  it('should create the event when using the correct payload', function () {
    const event = new PropertyInspectorDidDisappearEvent(eventValid);
    expect(event.device).to.equal('opaqueValue23');
    expect(event.context).to.equal('opaqueValue41');
    expect(event.action).to.equal('com.elgato.example.action3');
    expect(event.event).to.equal('propertyInspectorDidDisappear');
  });
  it('should throw a validation error on missing parameters', function () {
    expect(() => new PropertyInspectorDidDisappearEvent(eventMissingParameter)).to.throw(
      EventValidationError,
      /required property 'device'/,
    );
  });
  it('should throw a validation error on wrong event type', function () {
    expect(() => new PropertyInspectorDidDisappearEvent(eventInvalidType)).to.throw(
      EventValidationError,
      /should match pattern "\^propertyInspectorDidDisappear\$"/,
    );
  });
});
