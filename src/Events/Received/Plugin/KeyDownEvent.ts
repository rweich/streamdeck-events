import { KeyDownEventType } from '@/StreamdeckTypes/Sent';

import AbstractKeyEvent from './AbstractKeyEvent';

export default class KeyDownEvent extends AbstractKeyEvent {
  public readonly event = 'keyDown';

  protected get validationType(): typeof KeyDownEventType {
    return KeyDownEventType;
  }
}
