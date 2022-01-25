import 'mocha';

import { expect, use } from 'chai';
import jsonschema from 'chai-json-schema';

import { TargetEnum } from '@/Events/Sent/Plugin';
import SetImageEvent from '@/Events/Sent/Plugin/SetImageEvent';
import { SetImageType } from '@/StreamdeckTypes/Received';

use(jsonschema);

describe('SetImageEvent test', () => {
  it('validates a basic iamge event against the json schema', () => {
    const event = new SetImageEvent('base64string', 'context');
    expect(JSON.parse(JSON.stringify(event))).to.be.jsonSchema(SetImageType);
  });
  it('validates a targetted event against the json schema', () => {
    const event = new SetImageEvent('base64string', 'context', TargetEnum.Software);
    expect(JSON.parse(JSON.stringify(event))).to.be.jsonSchema(SetImageType);
  });
  it('validates an event with the sate set against the json schema', () => {
    const event = new SetImageEvent('base64string', 'context', TargetEnum.Both, 0);
    expect(JSON.parse(JSON.stringify(event))).to.be.jsonSchema(SetImageType);
  });
  it('returns the right values for a basic event', () => {
    const event = new SetImageEvent('base64string', 'context');
    expect(JSON.parse(JSON.stringify(event)).payload.image).to.equal('base64string');
    expect(JSON.parse(JSON.stringify(event)).payload.state).to.be.undefined;
  });
  it('returns the right values for a targetted event', () => {
    const event = new SetImageEvent('base64string2', 'context', TargetEnum.Software);
    expect(JSON.parse(JSON.stringify(event)).payload.image).to.equal('base64string2');
    expect(JSON.parse(JSON.stringify(event)).payload.target).to.equal(TargetEnum.Software);
  });
  it('returns the right values for an event with a specified state', () => {
    const event = new SetImageEvent('base64string3', 'context', TargetEnum.Hardware, 1);
    expect(JSON.parse(JSON.stringify(event)).payload.image).to.equal('base64string3');
    expect(JSON.parse(JSON.stringify(event)).payload.target).to.equal(TargetEnum.Hardware);
    expect(JSON.parse(JSON.stringify(event)).payload.state).to.equal(1);
  });
});
