import AbstractEncoderEvent from '@/Events/Received/Plugin/Dial/AbstractEncoderEvent';
import { DialPressEventType } from '@/StreamdeckTypes/Sent/Dial';

/**
 * An event fired when the user presses or releases a dial on their Stream Deck.
 *
 * In order to determine if this was a press or release event, check the result of {@linkcode pressed}.
 *
 * @deprecated The `dialPress` event was deprecated in Stream Deck SDK 6.1, and will be removed in a future version. It
 * has been replaced by the `dialDown` and `dialUp` events.
 */
export default class DialPressEvent extends AbstractEncoderEvent {
  public readonly event = 'dialPress';

  protected get validationType(): typeof DialPressEventType {
    return DialPressEventType;
  }
}
