import AbstractReceivedBaseEvent from '@/Events/Received/AbstractReceivedBaseEvent';
import { SystemDidWakeUpType } from '@/StreamdeckTypes/Received';

export default class SystemDidWakeUpEvent extends AbstractReceivedBaseEvent {
  public readonly event = 'systemDidWakeUp';

  protected get validationType(): typeof SystemDidWakeUpType {
    return SystemDidWakeUpType;
  }
}
