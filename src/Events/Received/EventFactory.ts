import { ReceivedPluginEventTypes } from '@/Events/Received/Plugin/ReceivedPluginEventTypes';
import { ReceivedPropertyInspectorEventTypes, SendToPropertyInspectorEvent } from '@/Events/Received/PropertyInspector';

import DidReceiveGlobalSettingsEvent from './DidReceiveGlobalSettingsEvent';
import DidReceiveSettingsEvent from './DidReceiveSettingsEvent';
import MissingEventInPayloadError from './Exception/MissingEventInPayloadError';
import UnknownEventError from './Exception/UnknownEventError';
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
} from './Plugin';

type EventNames = ReceivedPluginEventTypes['event'] | ReceivedPropertyInspectorEventTypes['event'];

interface ReceivedEvent {
  event: string;
}

function isBasicReceivedEvent(event: unknown): event is ReceivedEvent {
  return (event as ReceivedEvent).hasOwnProperty('event') && (event as ReceivedEvent)['event'].length > 0;
}

export default class EventFactory {
  public createByEventPayload(payload: unknown): ReceivedPluginEventTypes | ReceivedPropertyInspectorEventTypes {
    if (!isBasicReceivedEvent(payload)) {
      throw new MissingEventInPayloadError('no event type in received data: ' + JSON.stringify(payload));
    }

    const event: EventNames = payload.event as EventNames;

    switch (event) {
      case 'applicationDidLaunch':
        return new ApplicationDidLaunchEvent(payload);
      case 'applicationDidTerminate':
        return new ApplicationDidTerminateEvent(payload);
      case 'deviceDidConnect':
        return new DeviceDidConnectEvent(payload);
      case 'deviceDidDisconnect':
        return new DeviceDidDisconnectEvent(payload);
      case 'didReceiveSettings':
        return new DidReceiveSettingsEvent(payload);
      case 'didReceiveGlobalSettings':
        return new DidReceiveGlobalSettingsEvent(payload);
      case 'keyDown':
        return new KeyDownEvent(payload);
      case 'keyUp':
        return new KeyUpEvent(payload);
      case 'propertyInspectorDidAppear':
        return new PropertyInspectorDidAppearEvent(payload);
      case 'propertyInspectorDidDisappear':
        return new PropertyInspectorDidDisappearEvent(payload);
      case 'sendToPlugin':
        return new SendToPluginEvent(payload);
      case 'sendToPropertyInspector':
        return new SendToPropertyInspectorEvent(payload);
      case 'systemDidWakeUp':
        return new SystemDidWakeUpEvent(payload);
      case 'titleParametersDidChange':
        return new TitleParametersDidChangeEvent(payload);
      case 'willAppear':
        return new WillAppearEvent(payload);
      case 'willDisappear':
        return new WillDisappearEvent(payload);
      default: // creates a typeerror when we forget to add an event
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const checkIfAllEventsAreUsed: never = event;
        throw new UnknownEventError('unknown event: ' + payload.event + ' in data: ' + JSON.stringify(payload));
    }
  }
}
