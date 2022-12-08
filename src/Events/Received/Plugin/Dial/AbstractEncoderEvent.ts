import AbstractDialEvent from '@/Events/Received/Plugin/Dial/AbstractDialEvent';
import { BaseEncoderType } from '@/StreamdeckTypes/Sent/Dial/BaseEncoderType';

export default abstract class AbstractEncoderEvent extends AbstractDialEvent {
  protected declare readonly eventPayload: BaseEncoderType;

  public get pressed(): boolean {
    return this.eventPayload.payload.pressed;
  }
}
