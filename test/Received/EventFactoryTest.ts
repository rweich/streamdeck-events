import 'mocha';

import {
  ApplicationDidLaunchEvent,
  ApplicationDidTerminateEvent,
  DeviceDidConnectEvent,
  KeyDownEvent,
  KeyUpEvent,
  SendToPluginEvent,
  TitleParametersDidChangeEvent,
  WillAppearEvent,
  WillDisappearEvent,
} from '@/Events/Received/Plugin';

import EventFactory from '@/Events/Received/EventFactory';
import MissingEventInPayloadError from '@/Events/Received/Exception/MissingEventInPayloadError';
import { SendToPropertyInspectorEvent } from '@/Events/Received/PropertyInspector';
import UnknownEventError from '@/Events/Received/Exception/UnknownEventError';
import eventAppDidLaunch from './fixtures/applicationDidLaunchEvent.valid.json';
import eventAppDidTerminate from './fixtures/applicationDidTerminateEvent.valid.json';
import eventDeviceconnect from './fixtures/deviceDidConnectEvent.valid.json';
import eventKeydown from './fixtures/keyDownEvent.valid.json';
import eventKeyup from './fixtures/keyUpEvent.valid.json';
import eventSendtoPropertyInspector from './fixtures/sendToPropertyInspectorEvent.valid.json';
import eventSendtoplugin from './fixtures/sendToPluginEvent.valid.json';
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

  it('should return a keydown event', () => {
    expect(new EventFactory().createByEventPayload(eventKeydown)).to.be.instanceOf(KeyDownEvent);
  });

  it('should return a keyup event', () => {
    expect(new EventFactory().createByEventPayload(eventKeyup)).to.be.instanceOf(KeyUpEvent);
  });

  it('should return a willappear event', () => {
    expect(new EventFactory().createByEventPayload(eventWillappear)).to.be.instanceOf(WillAppearEvent);
  });

  it('should return a willdisappear event', () => {
    expect(new EventFactory().createByEventPayload(eventWilldisappear)).to.be.instanceOf(WillDisappearEvent);
  });

  it('should return a devicedidconnect event', () => {
    expect(new EventFactory().createByEventPayload(eventDeviceconnect)).to.be.instanceOf(DeviceDidConnectEvent);
  });

  it('should return a titelparamchange event', () => {
    expect(new EventFactory().createByEventPayload(eventTitleparamchange)).to.be.instanceOf(
      TitleParametersDidChangeEvent,
    );
  });

  it('should return a sendtoplugin event', () => {
    expect(new EventFactory().createByEventPayload(eventSendtoplugin)).to.be.instanceOf(SendToPluginEvent);
  });

  it('should return a sendtopropertyinspector event', () => {
    expect(new EventFactory().createByEventPayload(eventSendtoPropertyInspector)).to.be.instanceOf(
      SendToPropertyInspectorEvent,
    );
  });
});
