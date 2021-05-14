import 'mocha';

import { GetSettingsEvent, LogMessageEvent, OpenUrlEvent, RegisterEvent, SetSettingsEvent } from '@/Events/Sent';
import { GetSettingsType, LogMessageType, OpenUrlType, SetImageType, SetTitleType } from './Sent/types';
import { SendToPropertyInspectorEvent, SetImageEvent, SetTitleEvent, TargetEnum } from '@/Events/Sent/Plugin';
import { expect, use } from 'chai';

import { EventsSent } from '@/index';
import { SendToPluginEvent } from '@/Events/Sent/PropertyInspector';
import jsonschema from 'chai-json-schema';

use(jsonschema);

describe('EventsSent test', () => {
  it('creates the GetSettingsEvent', () => {
    const event = new EventsSent().getSettings('getsettings-context');
    const parsed: GetSettingsType = JSON.parse(JSON.stringify(event));
    expect(parsed).to.be.jsonSchema(GetSettingsEvent);
    expect(parsed.context).to.equal('getsettings-context');
  });
  it('creates the LogMessageEvent', () => {
    const event = new EventsSent().logMessage('message');
    const parsed: LogMessageType = JSON.parse(JSON.stringify(event));
    expect(parsed).to.be.jsonSchema(LogMessageEvent);
    expect(parsed.payload.message).to.equal('message');
  });
  it('creates the OpenUrlEvent', () => {
    const event = new EventsSent().openUrl('theurl');
    const parsed: OpenUrlType = JSON.parse(JSON.stringify(event));
    expect(parsed).to.be.jsonSchema(OpenUrlEvent);
    expect(parsed.payload.url).to.equal('theurl');
  });
  it('creates the RegisterEvent', () => {
    const event = new EventsSent().register('theevent', 'uuid');
    expect(event.event).to.equal('theevent');
    const parsed: { uuid: string } = JSON.parse(JSON.stringify(event));
    expect(parsed).to.be.jsonSchema(RegisterEvent);
    expect(parsed.uuid).to.equal('uuid');
  });
  it('creates the SendToPluginEvent', () => {
    const event = new EventsSent().sendToPlugin('theaction', 'thecontext', { the: 'payload' });
    const parsed: { action: string; payload: { the: string } } = JSON.parse(JSON.stringify(event));
    expect(parsed).to.be.jsonSchema(SendToPluginEvent);
    expect(parsed.action).to.equal('theaction');
    expect(parsed.payload.the).to.equal('payload');
  });
  it('creates the SendToPropertyInspectorEvent', () => {
    const event = new EventsSent().sendToPropertyInspector('aaction', 'acontext', { a: 'payload' });
    const parsed: { action: string; payload: { a: string } } = JSON.parse(JSON.stringify(event));
    expect(parsed).to.be.jsonSchema(SendToPropertyInspectorEvent);
    expect(parsed.action).to.equal('aaction');
    expect(parsed.payload.a).to.equal('payload');
  });
  it('creates the SetImageEvent', () => {
    let event = new EventsSent().setImage('theimage', 'thecontext', 'software');
    const parsed: SetImageType = JSON.parse(JSON.stringify(event));
    expect(parsed).to.be.jsonSchema(SetImageEvent);
    expect(parsed.payload.image).to.equal('theimage');
    expect(parsed.payload.target).to.equal(TargetEnum.Software);

    event = new EventsSent().setImage('theimage', 'thecontext', 'hardware');
    expect(JSON.parse(JSON.stringify(event)).payload.target).to.equal(TargetEnum.Hardware);

    event = new EventsSent().setImage('theimage', 'thecontext', 'both');
    expect(JSON.parse(JSON.stringify(event)).payload.target).to.equal(TargetEnum.Both);

    event = new EventsSent().setImage('theimage', 'thecontext');
    expect(JSON.parse(JSON.stringify(event)).payload.target).to.equal(TargetEnum.Both);
  });
  it('creates the SetSettingsEvent', () => {
    const event = new EventsSent().setSettings('thecontext', { some: 'payload' });
    const parsed: { payload: { some: string } } = JSON.parse(JSON.stringify(event));
    expect(parsed).to.be.jsonSchema(SetSettingsEvent);
    expect(parsed.payload.some).to.equal('payload');
  });
  it('creates the SetTitleEvent', () => {
    let event = new EventsSent().setTitle('thetitle', 'thecontext', 'hardware');
    const parsed: SetTitleType = JSON.parse(JSON.stringify(event));
    expect(parsed).to.be.jsonSchema(SetTitleEvent);
    expect(parsed.payload.title).to.equal('thetitle');
    expect(parsed.payload.target).to.equal(TargetEnum.Hardware);

    event = new EventsSent().setTitle('thetitle', 'thecontext', 'software');
    expect(JSON.parse(JSON.stringify(event)).payload.target).to.equal(TargetEnum.Software);

    event = new EventsSent().setTitle('thetitle', 'thecontext', 'both');
    expect(JSON.parse(JSON.stringify(event)).payload.target).to.equal(TargetEnum.Both);

    event = new EventsSent().setTitle('thetitle', 'thecontext');
    expect(JSON.parse(JSON.stringify(event)).payload.target).to.equal(TargetEnum.Both);
  });
});
