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
  TitleParametersDidChangeEvent,
  WillAppearEvent,
  WillDisappearEvent,
} from './Plugin';

import DidReceiveGlobalSettingsEvent from './DidReceiveGlobalSettingsEvent';
import DidReceiveSettingsEvent from './DidReceiveSettingsEvent';
import { EventsReceived } from './EventsReceived';
import MissingEventInPayloadError from './Exception/MissingEventInPayloadError';
import { ReceivedEventTypes } from '@/Events/Received/ReceivedEventTypes';
import { ReceivedPluginEvents } from './Plugin/ReceivedPluginEvents';
import { SendToPropertyInspectorEvent } from './PropertyInspector';
import UnknownEventError from './Exception/UnknownEventError';

interface BasicReceivedEvent {
  event: EventsReceived | ReceivedPluginEvents;
}

function isBasicReceivedEvent(event: unknown): event is BasicReceivedEvent {
  return (event as BasicReceivedEvent).hasOwnProperty('event') && (event as BasicReceivedEvent)['event'].length > 0;
}

export default class EventFactory {
  public createByEventPayload(payload: unknown): ReceivedEventTypes {
    if (!isBasicReceivedEvent(payload)) {
      throw new MissingEventInPayloadError('no event type in received data: ' + JSON.stringify(payload));
    }

    switch (payload.event) {
      case ReceivedPluginEvents.ApplicationDidLaunch:
        return new ApplicationDidLaunchEvent(payload);
      case ReceivedPluginEvents.ApplicationDidTerminate:
        return new ApplicationDidTerminateEvent(payload);
      case ReceivedPluginEvents.DeviceDidConnect:
        return new DeviceDidConnectEvent(payload);
      case ReceivedPluginEvents.DeviceDidDisconnect:
        return new DeviceDidDisconnectEvent(payload);
      case EventsReceived.DidReceiveSettings:
        return new DidReceiveSettingsEvent(payload);
      case EventsReceived.DidReceiveGlobalSettings:
        return new DidReceiveGlobalSettingsEvent(payload);
      case ReceivedPluginEvents.KeyDown:
        return new KeyDownEvent(payload);
      case ReceivedPluginEvents.KeyUp:
        return new KeyUpEvent(payload);
      case ReceivedPluginEvents.PropertyInspectorDidAppear:
        return new PropertyInspectorDidAppearEvent(payload);
      case ReceivedPluginEvents.PropertyInspectorDidDisappear:
        return new PropertyInspectorDidDisappearEvent(payload);
      case ReceivedPluginEvents.SendToPlugin:
        return new SendToPluginEvent(payload);
      case ReceivedPluginEvents.SendToPropertyInspector:
        return new SendToPropertyInspectorEvent(payload);
      case ReceivedPluginEvents.TitleParametersDidChange:
        return new TitleParametersDidChangeEvent(payload);
      case ReceivedPluginEvents.WillAppear:
        return new WillAppearEvent(payload);
      case ReceivedPluginEvents.WillDisappear:
        return new WillDisappearEvent(payload);
      default:
        throw new UnknownEventError('unknown event: ' + payload.event + ' in data: ' + JSON.stringify(payload));
    }
  }
}
