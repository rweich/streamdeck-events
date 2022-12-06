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

import {
  DialPressEvent,
  DialRotateEvent, TouchTapEvent
} from "@/Events/Received/Plugin/Dial";

export type ReceivedPluginEventTypes =
  | ReceivedEventTypes
  | ApplicationDidLaunchEvent
  | ApplicationDidTerminateEvent
  | DeviceDidConnectEvent
  | DeviceDidDisconnectEvent
  | DialPressEvent
  | DialRotateEvent
  | KeyDownEvent
  | KeyUpEvent
  | PropertyInspectorDidAppearEvent
  | PropertyInspectorDidDisappearEvent
  | SendToPluginEvent
  | SystemDidWakeUpEvent
  | TitleParametersDidChangeEvent
  | TouchTapEvent
  | WillAppearEvent
  | WillDisappearEvent;
