import AbstractEncoderEvent from '@/Events/Received/Plugin/Dial/AbstractEncoderEvent';
import { DialPressEventType } from '@/StreamdeckTypes/Sent/Dial';

/**
 * An event fired when the user presses or releases a dial on their Stream Deck.
 *
 * In order to determine if this was a press or release event, check the result of {@linkcode pressed}.
 */
export default class DialPressEvent extends AbstractEncoderEvent {
  public readonly event = 'dialPress';

  protected get validationType(): typeof DialPressEventType {
    return DialPressEventType;
  }
}
