import { DeviceDidDisconnectType } from '@/StreamdeckTypes/Sent';

import AbstractReceivedBaseEvent from '../AbstractReceivedBaseEvent';

export default class DeviceDidDisconnectEvent extends AbstractReceivedBaseEvent {
  public readonly event = 'deviceDidDisconnect';
  protected readonly eventPayload!: DeviceDidDisconnectType;

  public get device(): string {
    return this.eventPayload.device;
  }

  protected get validationType(): typeof DeviceDidDisconnectType {
    return DeviceDidDisconnectType;
  }
}
