import 'mocha';

import {
  GetGlobalSettingsType,
  GetSettingsType,
  LogMessageType,
  OpenUrlType,
  RegisterEventType,
  SendToPluginType,
  SendToPropertyInspectorType,
  SetGlobalSettingsType,
  SetImageType,
  SetSettingsType,
  SetStateType,
  SetTitleType,
} from '@/StreamdeckTypes/Received';
import { expect, use } from 'chai';

import { EventsSent } from '@/index';
import { TargetEnum } from '@/Events/Sent/Plugin';
import jsonschema from 'chai-json-schema';

use(jsonschema);

describe('EventsSent test', () => {
  it('creates the GetGlobalSettingsEvent', () => {
    const event = new EventsSent().getGlobalSettings('getglobalsettings-context');
    const parsed: GetGlobalSettingsType = JSON.parse(JSON.stringify(event));
    expect(parsed).to.be.jsonSchema(GetGlobalSettingsType);
    expect(parsed.context).to.equal('getglobalsettings-context');
  });
  it('creates the GetSettingsEvent', () => {
    const event = new EventsSent().getSettings('getsettings-context');
    const parsed: GetSettingsType = JSON.parse(JSON.stringify(event));
    expect(parsed).to.be.jsonSchema(GetSettingsType);
    expect(parsed.context).to.equal('getsettings-context');
  });
  it('creates the LogMessageEvent', () => {
    const event = new EventsSent().logMessage('message');
    const parsed: LogMessageType = JSON.parse(JSON.stringify(event));
    expect(parsed).to.be.jsonSchema(LogMessageType);
    expect(parsed.payload.message).to.equal('message');
  });
  it('creates the OpenUrlEvent', () => {
    const event = new EventsSent().openUrl('theurl');
    const parsed: OpenUrlType = JSON.parse(JSON.stringify(event));
    expect(parsed).to.be.jsonSchema(OpenUrlType);
    expect(parsed.payload.url).to.equal('theurl');
  });
  it('creates the RegisterEvent', () => {
    const event = new EventsSent().register('theregisterevent', 'uuid');
    expect(event.event).to.equal('theregisterevent');
    const parsed: { uuid: string } = JSON.parse(JSON.stringify(event));
    expect(parsed).to.be.jsonSchema(RegisterEventType);
    expect(parsed.uuid).to.equal('uuid');
  });
  it('creates the SendToPluginEvent', () => {
    const event = new EventsSent().sendToPlugin('theaction', 'thecontext', { the: 'payload' });
    const parsed: { action: string; payload: { the: string } } = JSON.parse(JSON.stringify(event));
    expect(parsed).to.be.jsonSchema(SendToPluginType);
    expect(parsed.action).to.equal('theaction');
    expect(parsed.payload.the).to.equal('payload');
  });
  it('creates the SendToPropertyInspectorEvent', () => {
    const event = new EventsSent().sendToPropertyInspector('aaction', 'acontext', { a: 'payload' });
    const parsed: { action: string; payload: { a: string } } = JSON.parse(JSON.stringify(event));
    expect(parsed).to.be.jsonSchema(SendToPropertyInspectorType);
    expect(parsed.action).to.equal('aaction');
    expect(parsed.payload.a).to.equal('payload');
  });
  it('creates the SetImageEvent', () => {
    let event = new EventsSent().setImage('theimage', 'thecontext', 'software');
    const parsed: SetImageType = JSON.parse(JSON.stringify(event));
    expect(parsed).to.be.jsonSchema(SetImageType);
    expect(parsed.payload.image).to.equal('theimage');
    expect(parsed.payload.target).to.equal(TargetEnum.Software);

    event = new EventsSent().setImage('theimage', 'thecontext', 'hardware');
    expect(JSON.parse(JSON.stringify(event)).payload.target).to.equal(TargetEnum.Hardware);

    event = new EventsSent().setImage('theimage', 'thecontext', 'both');
    expect(JSON.parse(JSON.stringify(event)).payload.target).to.equal(TargetEnum.Both);

    event = new EventsSent().setImage('theimage', 'thecontext');
    expect(JSON.parse(JSON.stringify(event)).payload.target).to.equal(TargetEnum.Both);
  });
  it('creates the SetGlobalSettingsEvent', () => {
    const event = new EventsSent().setGlobalSettings('thecontext', { some: 'payload' });
    const parsed: { payload: { some: string } } = JSON.parse(JSON.stringify(event));
    expect(parsed).to.be.jsonSchema(SetGlobalSettingsType);
    expect(parsed.payload.some).to.equal('payload');
  });
  it('creates the SetSettingsEvent', () => {
    const event = new EventsSent().setSettings('thecontext', { some: 'payload' });
    const parsed: { payload: { some: string } } = JSON.parse(JSON.stringify(event));
    expect(parsed).to.be.jsonSchema(SetSettingsType);
    expect(parsed.payload.some).to.equal('payload');
  });
  it('creates the SetStatEvent', () => {
    const event = new EventsSent().setState(1, 'thecontext');
    const parsed: SetStateType = JSON.parse(JSON.stringify(event));
    expect(parsed).to.be.jsonSchema(SetStateType);
    expect(parsed.payload.state).to.equal(1);
  });
  it('creates the SetTitleEvent', () => {
    let event = new EventsSent().setTitle('thetitle', 'thecontext', 'hardware');
    const parsed: SetTitleType = JSON.parse(JSON.stringify(event));
    expect(parsed).to.be.jsonSchema(SetTitleType);
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
