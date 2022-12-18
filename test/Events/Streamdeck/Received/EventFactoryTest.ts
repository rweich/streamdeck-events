import { expect } from 'chai';

import MissingEventInPayloadError from '@/Events/Received/Exception/MissingEventInPayloadError';
import UnknownEventError from '@/Events/Received/Exception/UnknownEventError';
import {
  EventFactory,
  GetGlobalSettingsEvent,
  GetSettingsEvent,
  LogMessageEvent,
  OpenUrlEvent,
  RegisterEvent,
  SendToPluginEvent,
  SendToPropertyInspectorEvent,
  SetFeedbackEvent,
  SetFeedbackLayoutEvent,
  SetGlobalSettingsEvent,
  SetImageEvent,
  SetSettingsEvent,
  SetStateEvent,
  SetTitleEvent,
  ShowAlertEvent,
  ShowOkEvent,
  SwitchToProfileEvent,
} from '@/Events/Streamdeck/Received';

import eventGetGlobalSettings from './fixtures/getGlobalSettingsEvent.valid.json';
import eventGetSettings from './fixtures/getSettingsEvent.valid.json';
import eventLogMessage from './fixtures/logMessageEvent.valid.json';
import eventOpenUrl from './fixtures/openUrlEvent.valid.json';
import eventRegister from './fixtures/registerEvent.valid.json';
import eventSendToPlugin from './fixtures/sendToPluginEvent.valid.json';
import eventSendToPropertyInspector from './fixtures/sendToPropertyInspectorEvent.valid.json';
import eventSetFeedback from './fixtures/setFeedback/valid.json';
import eventSetFeedbackLayout from './fixtures/setFeedbackLayout/valid.json';
import eventSetGlobalSettings from './fixtures/setGlobalSettingsEvent.valid.json';
import eventSetImage from './fixtures/setImageEvent.valid.json';
import eventSetSettings from './fixtures/setSettingsEvent.valid.json';
import eventSetState from './fixtures/setStateEvent.valid.json';
import eventSetTitle from './fixtures/setTitleEvent.valid.json';
import eventShowAlert from './fixtures/showAlertEvent.valid.json';
import eventShowOk from './fixtures/showOkEvent.valid.json';
import eventSwitchToProfile from './fixtures/switchToProfileEvent.valid.json';

describe('EventFactory test', () => {
  it('throws an error if no event type is specified', () => {
    const factory = new EventFactory();
    expect(() => factory.createByEventPayload({})).to.throw(MissingEventInPayloadError);
  });

  it('throws an error on an unknown event type', () => {
    const factory = new EventFactory();
    expect(() => factory.createByEventPayload({ event: 'hello' })).to.throw(UnknownEventError);
  });

  it('should return a GetSettingsEvent', () => {
    expect(new EventFactory().createByEventPayload(eventGetSettings)).to.be.instanceOf(GetSettingsEvent);
  });
  it('should return a GetGlobalSettingsEvent', () => {
    expect(new EventFactory().createByEventPayload(eventGetGlobalSettings)).to.be.instanceOf(GetGlobalSettingsEvent);
  });

  it('should return a LogMessageEvent', () => {
    expect(new EventFactory().createByEventPayload(eventLogMessage)).to.be.instanceOf(LogMessageEvent);
  });

  it('should return a OpenUrlEvent', () => {
    expect(new EventFactory().createByEventPayload(eventOpenUrl)).to.be.instanceOf(OpenUrlEvent);
  });

  it('should return a RegisterEvent', () => {
    expect(new EventFactory().createByEventPayload(eventRegister)).to.be.instanceOf(RegisterEvent);
  });

  it('should return a SendToPluginEvent', () => {
    expect(new EventFactory().createByEventPayload(eventSendToPlugin)).to.be.instanceOf(SendToPluginEvent);
  });

  it('should return a SendToPropertyInspectorEvent', () => {
    expect(new EventFactory().createByEventPayload(eventSendToPropertyInspector)).to.be.instanceOf(
      SendToPropertyInspectorEvent,
    );
  });

  it('should return a SetFeedbackEvent', () => {
    expect(new EventFactory().createByEventPayload(eventSetFeedback)).to.be.instanceof(SetFeedbackEvent);
  });

  it('should return a SetFeedbackLayoutEvent', () => {
    expect(new EventFactory().createByEventPayload(eventSetFeedbackLayout)).to.be.instanceOf(SetFeedbackLayoutEvent);
  });

  it('should return a SetGlobalSettingsEvent', () => {
    expect(new EventFactory().createByEventPayload(eventSetGlobalSettings)).to.be.instanceOf(SetGlobalSettingsEvent);
  });

  it('should return a SetImageEvent', () => {
    expect(new EventFactory().createByEventPayload(eventSetImage)).to.be.instanceOf(SetImageEvent);
  });

  it('should return a SetTitleEvent', () => {
    expect(new EventFactory().createByEventPayload(eventSetTitle)).to.be.instanceOf(SetTitleEvent);
  });

  it('should return a SetSettingsEvent', () => {
    expect(new EventFactory().createByEventPayload(eventSetSettings)).to.be.instanceOf(SetSettingsEvent);
  });

  it('should return a SetStateEvent', () => {
    expect(new EventFactory().createByEventPayload(eventSetState)).to.be.instanceOf(SetStateEvent);
  });

  it('should return a ShowAlertEvent', () => {
    expect(new EventFactory().createByEventPayload(eventShowAlert)).to.be.instanceOf(ShowAlertEvent);
  });

  it('should return a ShowOkEvent', () => {
    expect(new EventFactory().createByEventPayload(eventShowOk)).to.be.instanceOf(ShowOkEvent);
  });

  it('should return a SwitchToProfileEvent', () => {
    expect(new EventFactory().createByEventPayload(eventSwitchToProfile)).to.be.instanceOf(SwitchToProfileEvent);
  });
});
