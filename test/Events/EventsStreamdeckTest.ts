import 'mocha';

import { expect, use } from 'chai';
import jsonschema from 'chai-json-schema';

import { ShowOkEvent } from '@/Events/Streamdeck/Received';
import { EventsStreamdeck } from '@/index';
import {
  DeviceDidConnectType,
  DeviceDidDisconnectType,
  DidReceiveGlobalSettingsType,
  DidReceiveSettingsType,
  KeyDownEventType,
  KeyUpEventType,
  TitleParametersDidChangeType,
  WillAppearType,
  WillDisappearType,
} from '@/StreamdeckTypes/Sent';

import eventShowOk from './Streamdeck/Received/fixtures/showOkEvent.valid.json';

use(jsonschema);

describe('EventsStreamdeck received events test', () => {
  it('creates the showOk event from payload', () => {
    expect(new EventsStreamdeck().createFromPayload(eventShowOk)).to.be.instanceOf(ShowOkEvent);
  });
});

describe('EventsStreamdeck sent events test', () => {
  it('creates the devicedidconnect event', () => {
    const event = new EventsStreamdeck().deviceDidConnect('xx');
    expect(JSON.parse(JSON.stringify(event))).to.be.jsonSchema(DeviceDidConnectType);
  });

  it('creates the devicediddisconnect event', () => {
    const event = new EventsStreamdeck().deviceDidDisconnect('xx');
    expect(JSON.parse(JSON.stringify(event))).to.be.jsonSchema(DeviceDidDisconnectType);
  });

  it('creates the didreceiveglobalsettings event', () => {
    const event = new EventsStreamdeck().didReceiveGlobalSettings({});
    expect(JSON.parse(JSON.stringify(event))).to.be.jsonSchema(DidReceiveGlobalSettingsType);
  });

  it('creates the didreceivesettings event', () => {
    const event = new EventsStreamdeck().didReceiveSettings('action', 'context');
    expect(JSON.parse(JSON.stringify(event))).to.be.jsonSchema(DidReceiveSettingsType);
  });

  it('creates the keydown event', () => {
    const event = new EventsStreamdeck().keyDown('action', 'context');
    expect(JSON.parse(JSON.stringify(event))).to.be.jsonSchema(KeyDownEventType);
  });

  it('creates the keyup event', () => {
    const event = new EventsStreamdeck().keyUp('action', 'context');
    expect(JSON.parse(JSON.stringify(event))).to.be.jsonSchema(KeyUpEventType);
  });

  it('creates the titleparamchange event', () => {
    const event = new EventsStreamdeck().titleParametersDidChange('action', 'context');
    expect(JSON.parse(JSON.stringify(event))).to.be.jsonSchema(TitleParametersDidChangeType);
  });

  it('creates the willappear event', () => {
    const event = new EventsStreamdeck().willAppear('action', 'context');
    expect(JSON.parse(JSON.stringify(event))).to.be.jsonSchema(WillAppearType);
  });

  it('creates the willdisappear event', () => {
    const event = new EventsStreamdeck().willDisappear('action', 'context');
    expect(JSON.parse(JSON.stringify(event))).to.be.jsonSchema(WillDisappearType);
  });
});
