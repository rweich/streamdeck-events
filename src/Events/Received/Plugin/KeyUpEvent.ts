import AbstractKeyEvent from './AbstractKeyEvent';
import { KeyUpEventType } from '@/StreamdeckTypes/Sent';

export default class KeyUpEvent extends AbstractKeyEvent {
  protected get validationType(): typeof KeyUpEventType {
    return KeyUpEventType;
  }
}
