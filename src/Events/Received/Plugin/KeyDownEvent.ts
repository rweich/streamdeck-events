import AbstractKeyEvent from './AbstractKeyEvent';
import { KeyDownEventType } from '@/StreamdeckTypes/Sent';

export default class KeyDownEvent extends AbstractKeyEvent {
  public readonly event = 'keyDown';

  protected get validationType(): typeof KeyDownEventType {
    return KeyDownEventType;
  }
}
