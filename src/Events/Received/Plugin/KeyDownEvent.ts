import AbstractKeyEvent from './AbstractKeyEvent';
import { KeyDownEventType } from '@/StreamdeckTypes/Sent';

export default class KeyDownEvent extends AbstractKeyEvent {
  protected get validationType(): typeof KeyDownEventType {
    return KeyDownEventType;
  }
}
