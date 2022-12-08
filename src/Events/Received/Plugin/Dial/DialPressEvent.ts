import AbstractEncoderEvent from '@/Events/Received/Plugin/Dial/AbstractEncoderEvent';
import { DialPressEventType } from '@/StreamdeckTypes/Sent/Dial';

export default class DialPressEvent extends AbstractEncoderEvent {
  public readonly event = 'dialPress';

  protected get validationType(): typeof DialPressEventType {
    return DialPressEventType;
  }
}
