import AbstractEncoderEvent from '@/Events/Received/Plugin/Dial/AbstractEncoderEvent';
import { DialDownEventType } from '@/StreamdeckTypes/Sent/Dial';

/**
 * An event fired when the user presses a dial on their Stream Deck.
 * Present in Stream Deck SDK version 6.1 and higher.
 */
export default class DialDownEvent extends AbstractEncoderEvent {
  public readonly event = 'dialDown';

  protected get validationType(): typeof DialDownEventType {
    return DialDownEventType;
  }
}
