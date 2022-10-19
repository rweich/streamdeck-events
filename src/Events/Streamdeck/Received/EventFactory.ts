import MissingEventInPayloadError from '@/Events/Received/Exception/MissingEventInPayloadError';
import UnknownEventError from '@/Events/Received/Exception/UnknownEventError';
import {
  GetGlobalSettingsEvent,
  GetSettingsEvent,
  LogMessageEvent,
  OpenUrlEvent,
  RegisterEvent,
  SendToPluginEvent,
  SendToPropertyInspectorEvent,
  SetGlobalSettingsEvent,
  SetImageEvent,
  SetSettingsEvent,
  SetStateEvent,
  SetTitleEvent,
  ShowAlertEvent,
  ShowOkEvent,
  SwitchToProfileEvent,
} from '@/Events/Streamdeck/Received';
import { ReceivedEventTypes } from '@/Events/Streamdeck/Received/ReceivedEventTypes';

type EventNames = Exclude<ReceivedEventTypes['event'], 'register'>;

interface ReceivedEvent {
  event: string;
}

function isBasicReceivedEvent(event: unknown): event is ReceivedEvent {
  return (event as ReceivedEvent).hasOwnProperty('event') && (event as ReceivedEvent)['event'].length > 0;
}

export default class EventFactory {
  public createByEventPayload(payload: unknown): ReceivedEventTypes {
    if (!isBasicReceivedEvent(payload)) {
      throw new MissingEventInPayloadError('no event type in received data: ' + JSON.stringify(payload));
    }

    if (/register/i.test(payload.event)) {
      return new RegisterEvent(payload);
    }

    const event: EventNames = payload.event as EventNames;

    switch (event) {
      case 'getGlobalSettings':
        return new GetGlobalSettingsEvent(payload);
      case 'getSettings':
        return new GetSettingsEvent(payload);
      case 'logMessage':
        return new LogMessageEvent(payload);
      case 'openUrl':
        return new OpenUrlEvent(payload);
      case 'sendToPlugin':
        return new SendToPluginEvent(payload);
      case 'sendToPropertyInspector':
        return new SendToPropertyInspectorEvent(payload);
      case 'setGlobalSettings':
        return new SetGlobalSettingsEvent(payload);
      case 'setImage':
        return new SetImageEvent(payload);
      case 'setTitle':
        return new SetTitleEvent(payload);
      case 'setSettings':
        return new SetSettingsEvent(payload);
      case 'setState':
        return new SetStateEvent(payload);
      case 'showAlert':
        return new ShowAlertEvent(payload);
      case 'showOk':
        return new ShowOkEvent(payload);
      case 'switchToProfile':
        return new SwitchToProfileEvent(payload);
      default: // creates a typeerror when we forget to add an event
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const checkIfAllEventsAreUsed: never = event;
        throw new UnknownEventError(`unknown event: ${event} in data: ${JSON.stringify(payload)}`);
    }
  }
}
