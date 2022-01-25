import { ReceivedEventTypes } from '@/Events/Received';
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

export type ReceivedPluginEventTypes =
  | ReceivedEventTypes
  | ApplicationDidLaunchEvent
  | ApplicationDidTerminateEvent
  | DeviceDidConnectEvent
  | DeviceDidDisconnectEvent
  | KeyDownEvent
  | KeyUpEvent
  | PropertyInspectorDidAppearEvent
  | PropertyInspectorDidDisappearEvent
  | SendToPluginEvent
  | SystemDidWakeUpEvent
  | TitleParametersDidChangeEvent
  | WillAppearEvent
  | WillDisappearEvent;
