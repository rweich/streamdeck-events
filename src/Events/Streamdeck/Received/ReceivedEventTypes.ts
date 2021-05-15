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
} from '@/Events/Streamdeck/Received/index';

export type ReceivedEventTypes =
  | GetGlobalSettingsEvent
  | GetSettingsEvent
  | LogMessageEvent
  | OpenUrlEvent
  | RegisterEvent
  | SendToPluginEvent
  | SendToPropertyInspectorEvent
  | SetGlobalSettingsEvent
  | SetImageEvent
  | SetSettingsEvent
  | SetStateEvent
  | SetTitleEvent
  | ShowAlertEvent
  | ShowOkEvent
  | SwitchToProfileEvent;
