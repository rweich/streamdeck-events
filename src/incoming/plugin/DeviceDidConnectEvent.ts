import AbstractIncomingBaseEvent from '../AbstractIncomingBaseEvent';
import { DeviceDidConnectType } from '../streamdecktypes/DeviceEventType';
import { DeviceType } from './DeviceType';
import { Static } from '@sinclair/typebox';

export default class DeviceDidConnectEvent extends AbstractIncomingBaseEvent {
  protected readonly eventPayload!: Static<typeof DeviceDidConnectType>;

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
