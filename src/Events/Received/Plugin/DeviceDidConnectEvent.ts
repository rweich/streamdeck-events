import { DeviceDidConnectType } from '@/StreamdeckTypes/Sent';

import AbstractReceivedBaseEvent from '../AbstractReceivedBaseEvent';
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

  public get typeName(): keyof typeof DeviceType {
    // ToDo: redeclare this as just string? Does it really need to be typed this strictly?

    switch (this.eventPayload.deviceInfo.type) {
      case DeviceType.StreamDeck:
        return 'StreamDeck';
      case DeviceType.StreamDeckMini:
        return 'StreamDeckMini';
      case DeviceType.StreamDeckXL:
        return 'StreamDeckXL';
      case DeviceType.StreamDeckMobile:
        return 'StreamDeckMobile';
      case DeviceType.CorsairGKeys:
        return 'CorsairGKeys';
      case DeviceType.StreamDeckPedal:
        return 'StreamDeckPedal';
      case DeviceType.CorsairVoyager:
        return 'CorsairVoyager';
      case DeviceType.StreamDeckPlus:
        return 'StreamDeckPlus';
      /* istanbul ignore next - just a typecheck - unreachable code, based on the payload validation */
      default:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const completeCheck: never = this.eventPayload.deviceInfo.type;
        return 'StreamDeck';
    }
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
