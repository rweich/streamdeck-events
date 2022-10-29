import { convertFromName } from '@/Events/Received/Plugin/DeviceType';
import AbstractEvent from '@/Events/Streamdeck/Sent/AbstractEvent';
import { DeviceDidConnectType } from '@/StreamdeckTypes/Sent';

export interface DeviceDidConnectOptions {
  columns: number;
  name: string;
  rows: number;
  type: 'StreamDeck' | 'StreamDeckMini' | 'StreamDeckXL' | 'StreamDeckMobile' | 'CorsairGKeys';
}

const defaults: DeviceDidConnectOptions = {
  columns: 3,
  name: 'a name',
  rows: 3,
  type: 'StreamDeckMini',
};

export default class DeviceDidConnectEvent extends AbstractEvent {
  protected readonly data: DeviceDidConnectType;

  constructor(device: string, options?: Partial<DeviceDidConnectOptions>) {
    super();
    this.data = {
      device: device,
      deviceInfo: {
        name: options?.name ?? defaults.name,
        size: {
          columns: options?.columns ?? defaults.columns,
          rows: options?.rows ?? defaults.rows,
        },
        type: convertFromName(options?.type ?? defaults.type),
      },
      event: 'deviceDidConnect',
    };
  }
}
