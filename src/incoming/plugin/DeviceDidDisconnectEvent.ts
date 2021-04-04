import AbstractIncomingBaseEvent from '../AbstractIncomingBaseEvent';
import { DeviceDidDisconnectType } from '../streamdecktypes/DeviceEventType';
import { Static } from '@sinclair/typebox';

export default class DeviceDidDisconnectEvent extends AbstractIncomingBaseEvent {
  protected readonly eventPayload!: Static<typeof DeviceDidDisconnectType>;

  public get device(): string {
    return this.eventPayload.device;
  }

  protected get validationType(): typeof DeviceDidDisconnectType {
    return DeviceDidDisconnectType;
  }
}
