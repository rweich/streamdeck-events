import {
  GetGlobalSettingsEvent,
  GetSettingsEvent,
  LogMessageEvent,
  OpenUrlEvent,
  ReceivedStreamdeckEvents,
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

import MissingEventInPayloadError from '@/Events/Received/Exception/MissingEventInPayloadError';
import { ReceivedEventTypes } from '@/Events/Streamdeck/Received/ReceivedEventTypes';
import UnknownEventError from '@/Events/Received/Exception/UnknownEventError';

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

    switch (payload.event) {
      case ReceivedStreamdeckEvents.GetSettings:
        return new GetSettingsEvent(payload);
      case ReceivedStreamdeckEvents.GetGlobalSettings:
        return new GetGlobalSettingsEvent(payload);
      case ReceivedStreamdeckEvents.LogMessage:
        return new LogMessageEvent(payload);
      case ReceivedStreamdeckEvents.OpenUrl:
        return new OpenUrlEvent(payload);
      case ReceivedStreamdeckEvents.SendToPlugin:
        return new SendToPluginEvent(payload);
      case ReceivedStreamdeckEvents.SendToPropertyInspector:
        return new SendToPropertyInspectorEvent(payload);
      case ReceivedStreamdeckEvents.SetGlobalSettings:
        return new SetGlobalSettingsEvent(payload);
      case ReceivedStreamdeckEvents.SetImage:
        return new SetImageEvent(payload);
      case ReceivedStreamdeckEvents.SetTitle:
        return new SetTitleEvent(payload);
      case ReceivedStreamdeckEvents.SetSettings:
        return new SetSettingsEvent(payload);
      case ReceivedStreamdeckEvents.SetState:
        return new SetStateEvent(payload);
      case ReceivedStreamdeckEvents.ShowAlert:
        return new ShowAlertEvent(payload);
      case ReceivedStreamdeckEvents.ShowOk:
        return new ShowOkEvent(payload);
      case ReceivedStreamdeckEvents.SwitchToProfile:
        return new SwitchToProfileEvent(payload);
      default:
        throw new UnknownEventError('unknown event: ' + payload.event + ' in data: ' + JSON.stringify(payload));
    }
  }
}
