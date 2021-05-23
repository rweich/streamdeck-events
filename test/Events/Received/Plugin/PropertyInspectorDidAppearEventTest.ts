import 'mocha';

import EventValidationError from '@/Events/Received/Exception/EventValidationError';
import PropertyInspectorDidAppearEvent from '@/Events/Received/Plugin/PropertyInspectorDidAppearEvent';
import eventInvalidType from '../fixtures/propertyInspectorDidAppearEvent.invalid-eventtype.json';
import eventMissingParameter from '../fixtures/propertyInspectorDidAppearEvent.missing-param.json';
import eventValid from '../fixtures/propertyInspectorDidAppearEvent.valid.json';
import { expect } from 'chai';

describe('PropertyInspectorDidAppearEvent test', () => {
  it('should create the event when using the correct payload', function () {
    const event = new PropertyInspectorDidAppearEvent(eventValid);
    expect(event.device).to.equal('opaqueValue2');
    expect(event.context).to.equal('opaqueValue');
    expect(event.action).to.equal('com.elgato.example.action1');
    expect(event.event).to.equal('propertyInspectorDidAppear');
  });
  it('should throw a validation error on missing parameters', function () {
    expect(() => new PropertyInspectorDidAppearEvent(eventMissingParameter)).to.throw(
      EventValidationError,
      /required property 'context'/,
    );
  });
  it('should throw a validation error on wrong event type', function () {
    expect(() => new PropertyInspectorDidAppearEvent(eventInvalidType)).to.throw(
      EventValidationError,
      /must match pattern "\^propertyInspectorDidAppear\$"/,
    );
  });
});
