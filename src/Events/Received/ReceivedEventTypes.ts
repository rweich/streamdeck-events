import { DeviceDidConnectEvent, DeviceDidDisconnectEvent, SendToPluginEvent } from '@/Events/Received/Plugin';

import AbstractReceivedBaseEvent from '@/Events/Received/AbstractReceivedBaseEvent';
import AbstractReceivedExtendedEvent from '@/Events/Received/AbstractReceivedExtendedEvent';

export type ReceivedEventTypes =
  | AbstractReceivedBaseEvent
  | AbstractReceivedExtendedEvent
  | DeviceDidConnectEvent
  | DeviceDidDisconnectEvent
  | SendToPluginEvent;
