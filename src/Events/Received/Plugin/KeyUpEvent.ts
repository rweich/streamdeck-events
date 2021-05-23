import AbstractKeyEvent from './AbstractKeyEvent';
import { KeyUpEventType } from '@/StreamdeckTypes/Sent';

export default class KeyUpEvent extends AbstractKeyEvent {
  public readonly event = 'keyUp';

  protected get validationType(): typeof KeyUpEventType {
    return KeyUpEventType;
  }
}
