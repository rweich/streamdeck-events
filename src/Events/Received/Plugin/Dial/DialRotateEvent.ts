import AbstractEncoderEvent from '@/Events/Received/Plugin/Dial/AbstractEncoderEvent';
import { DialRotateEventType } from '@/StreamdeckTypes/Sent/Dial';

export default class DialRotateEvent extends AbstractEncoderEvent {
  public readonly event = 'dialRotate';
  protected declare readonly eventPayload: DialRotateEventType;

  protected get validationType(): typeof DialRotateEventType {
    return DialRotateEventType;
  }

  public get ticks(): number {
    return this.eventPayload.payload.ticks;
  }
}
