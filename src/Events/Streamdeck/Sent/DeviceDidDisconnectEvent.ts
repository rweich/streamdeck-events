import AbstractEvent from '@/Events/Streamdeck/Sent/AbstractEvent';
import { DeviceDidDisconnectType } from '@/StreamdeckTypes/Sent';

export default class DeviceDidDisconnectEvent extends AbstractEvent {
  protected readonly data: DeviceDidDisconnectType;

  constructor(device: string) {
    super();
    this.data = {
      device: device,
      event: 'deviceDidDisconnect',
    };
  }
}
