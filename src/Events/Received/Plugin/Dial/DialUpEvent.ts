import AbstractEncoderEvent from '@/Events/Received/Plugin/Dial/AbstractEncoderEvent';
import { DialUpEventType } from '@/StreamdeckTypes/Sent/Dial';

/**
 * An event fired when the user releases a dial on their Stream Deck.
 * Present in Stream Deck SDK version 6.1 and higher.
 */
export default class DialUpEvent extends AbstractEncoderEvent {
  public readonly event = 'dialUp';

  protected get validationType(): typeof DialUpEventType {
    return DialUpEventType;
  }
}
