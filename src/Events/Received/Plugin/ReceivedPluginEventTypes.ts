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
} from '@/Events/Received/Plugin';

import { ReceivedEventTypes } from '@/Events/Received';

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
  | TitleParametersDidChangeEvent
  | WillAppearEvent
  | WillDisappearEvent;
