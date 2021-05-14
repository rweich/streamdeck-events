import AbstractKeyEvent from './AbstractKeyEvent';
import { KeyUpEventType } from '@/StreamdeckTypes';

export default class KeyUpEvent extends AbstractKeyEvent {
  protected get validationType(): typeof KeyUpEventType {
    return KeyUpEventType;
  }
}
