import AbstractDialEvent from '@/Events/Received/Plugin/Dial/AbstractDialEvent';
import { BaseEncoderType } from '@/StreamdeckTypes/Sent/Dial/BaseEncoderType';

export default abstract class AbstractEncoderEvent extends AbstractDialEvent {
  protected declare readonly eventPayload: BaseEncoderType;

  /**
   * Checks if a dial was pressed in while this event happened.
   * @returns {boolean} Returns true if the dial was pressed in, false otherwise.
   */
  public get pressed(): boolean {
    return this.eventPayload.payload.pressed;
  }
}
