import { DeviceDidConnectEvent, DeviceDidDisconnectEvent, SendToPluginEvent } from '@/Events/Received/plugin';

import AbstractReceivedBaseEvent from '@/Events/Received/AbstractReceivedBaseEvent';
import AbstractReceivedExtendedEvent from '@/Events/Received/AbstractReceivedExtendedEvent';

export type ReceivedEventTypes =
  | AbstractReceivedBaseEvent
  | AbstractReceivedExtendedEvent
  | DeviceDidConnectEvent
  | DeviceDidDisconnectEvent
  | SendToPluginEvent;
