import AbstractReceivedBaseEvent from '../AbstractReceivedBaseEvent';
import { DeviceDidConnectType } from '@/StreamdeckTypes/Sent';
import { DeviceType } from './DeviceType';

export default class DeviceDidConnectEvent extends AbstractReceivedBaseEvent {
  public readonly event = 'deviceDidConnect';
  protected readonly eventPayload!: DeviceDidConnectType;

  public get device(): string {
    return this.eventPayload.device;
  }

  public get name(): string {
    return this.eventPayload.deviceInfo.name;
  }

  public get type(): DeviceType {
    return this.eventPayload.deviceInfo.type;
  }

  public get columns(): number {
    return this.eventPayload.deviceInfo.size.columns;
  }

  public get rows(): number {
    return this.eventPayload.deviceInfo.size.rows;
  }

  protected get validationType(): typeof DeviceDidConnectType {
    return DeviceDidConnectType;
  }
}
