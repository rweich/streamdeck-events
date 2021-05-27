import 'mocha';

import {
  ApplicationDidLaunchEvent,
  ApplicationDidTerminateEvent,
  DeviceDidConnectEvent,
  DeviceDidDisconnectEvent,
  KeyDownEvent,
  KeyUpEvent,
  PropertyInspectorDidAppearEvent,
  PropertyInspectorDidDisappearEvent,
  SendToPluginEvent,
  SystemDidWakeUpEvent,
  TitleParametersDidChangeEvent,
  WillAppearEvent,
  WillDisappearEvent,
} from '@/Events/Received/Plugin';
import { DidReceiveGlobalSettingsEvent, DidReceiveSettingsEvent } from '@/Events/Received';

import EventFactory from '@/Events/Received/EventFactory';
import MissingEventInPayloadError from '@/Events/Received/Exception/MissingEventInPayloadError';
import { SendToPropertyInspectorEvent } from '@/Events/Received/PropertyInspector';
import UnknownEventError from '@/Events/Received/Exception/UnknownEventError';
import eventAppDidLaunch from './fixtures/applicationDidLaunchEvent.valid.json';
import eventAppDidTerminate from './fixtures/applicationDidTerminateEvent.valid.json';
import eventDeviceDisconnect from './fixtures/deviceDidDisconnectEvent.valid.json';
import eventDeviceconnect from './fixtures/deviceDidConnectEvent.valid.json';
import eventDidReceiveGlobalSettings from './fixtures/didReceiveGlobalSettingsEvent.valid.json';
import eventDidReceiveSettings from './fixtures/didReceiveSettingsEvent.valid.json';
import eventKeydown from './fixtures/keyDownEvent.valid.json';
import eventKeyup from './fixtures/keyUpEvent.valid.json';
import eventPIAppear from './fixtures/propertyInspectorDidAppearEvent.valid.json';
import eventPIDisappear from './fixtures/propertyInspectorDidDisappearEvent.valid.json';
import eventSendtoPropertyInspector from './fixtures/sendToPropertyInspectorEvent.valid.json';
import eventSendtoplugin from './fixtures/sendToPluginEvent.valid.json';
import eventSystemDidWakeUp from './fixtures/systemDidWakeUpEvent.valid.json';
import eventTitleparamchange from './fixtures/titleParametersDidChangeEvent.valid.json';
import eventWillappear from './fixtures/willAppearEvent.valid.json';
import eventWilldisappear from './fixtures/willDisappearEvent.valid.json';
import { expect } from 'chai';

describe('EventFactory test', () => {
  it('throws an error if no event type is specified', () => {
    const factory = new EventFactory();
    expect(() => factory.createByEventPayload({})).to.throw(MissingEventInPayloadError);
  });

  it('throws an error on an unknown event type', () => {
    const factory = new EventFactory();
    expect(() => factory.createByEventPayload({ event: 'hello' })).to.throw(UnknownEventError);
  });

  it('should return a applicationdidlaunch event', () => {
    expect(new EventFactory().createByEventPayload(eventAppDidLaunch)).to.be.instanceOf(ApplicationDidLaunchEvent);
  });

  it('should return a applicationdidterminate event', () => {
    expect(new EventFactory().createByEventPayload(eventAppDidTerminate)).to.be.instanceOf(
      ApplicationDidTerminateEvent,
    );
  });

  it('should return a devicedidconnect event', () => {
    expect(new EventFactory().createByEventPayload(eventDeviceconnect)).to.be.instanceOf(DeviceDidConnectEvent);
  });

  it('should return a DeviceDidDisconnectEvent', () => {
    expect(new EventFactory().createByEventPayload(eventDeviceDisconnect)).to.be.instanceOf(DeviceDidDisconnectEvent);
  });

  it('should return a DidReceiveSettingsEvent', () => {
    expect(new EventFactory().createByEventPayload(eventDidReceiveSettings)).to.be.instanceOf(DidReceiveSettingsEvent);
  });

  it('should return a DidReceiveGlobalSettingsEvent', () => {
    expect(new EventFactory().createByEventPayload(eventDidReceiveGlobalSettings)).to.be.instanceOf(
      DidReceiveGlobalSettingsEvent,
    );
  });

  it('should return a keydown event', () => {
    expect(new EventFactory().createByEventPayload(eventKeydown)).to.be.instanceOf(KeyDownEvent);
  });

  it('should return a keyup event', () => {
    expect(new EventFactory().createByEventPayload(eventKeyup)).to.be.instanceOf(KeyUpEvent);
  });

  it('should return a PropertyInspectorDidAppearEvent', () => {
    expect(new EventFactory().createByEventPayload(eventPIAppear)).to.be.instanceOf(PropertyInspectorDidAppearEvent);
  });

  it('should return a PropertyInspectorDidAppearEvent', () => {
    expect(new EventFactory().createByEventPayload(eventPIDisappear)).to.be.instanceOf(
      PropertyInspectorDidDisappearEvent,
    );
  });

  it('should return a sendtoplugin event', () => {
    expect(new EventFactory().createByEventPayload(eventSendtoplugin)).to.be.instanceOf(SendToPluginEvent);
  });

  it('should return a systemdidwakeup event', () => {
    expect(new EventFactory().createByEventPayload(eventSystemDidWakeUp)).to.be.instanceOf(SystemDidWakeUpEvent);
  });

  it('should return a sendtopropertyinspector event', () => {
    expect(new EventFactory().createByEventPayload(eventSendtoPropertyInspector)).to.be.instanceOf(
      SendToPropertyInspectorEvent,
    );
  });

  it('should return a titelparamchange event', () => {
    expect(new EventFactory().createByEventPayload(eventTitleparamchange)).to.be.instanceOf(
      TitleParametersDidChangeEvent,
    );
  });

  it('should return a willappear event', () => {
    expect(new EventFactory().createByEventPayload(eventWillappear)).to.be.instanceOf(WillAppearEvent);
  });

  it('should return a willdisappear event', () => {
    expect(new EventFactory().createByEventPayload(eventWilldisappear)).to.be.instanceOf(WillDisappearEvent);
  });
});
