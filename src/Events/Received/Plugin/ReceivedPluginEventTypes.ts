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
  TimerUpdateEvent,
  TitleParametersDidChangeEvent,
  WillAppearEvent,
  WillDisappearEvent,
} from '@/Events/Received/Plugin';
import {
  DialDownEvent,
  DialPressEvent,
  DialRotateEvent,
  DialUpEvent,
  TouchTapEvent,
} from '@/Events/Received/Plugin/Dial';

export type ReceivedPluginEventTypes =
  | ReceivedEventTypes
  | ApplicationDidLaunchEvent
  | ApplicationDidTerminateEvent
  | DeviceDidConnectEvent
  | DeviceDidDisconnectEvent
  | DialDownEvent
  | DialPressEvent
  | DialRotateEvent
  | DialUpEvent
  | KeyDownEvent
  | KeyUpEvent
  | PropertyInspectorDidAppearEvent
  | PropertyInspectorDidDisappearEvent
  | SendToPluginEvent
  | SystemDidWakeUpEvent
  | TimerUpdateEvent
  | TitleParametersDidChangeEvent
  | TouchTapEvent
  | WillAppearEvent
  | WillDisappearEvent;
