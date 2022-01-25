import { KeyUpEventType } from '@/StreamdeckTypes/Sent';

import AbstractKeyEvent from './AbstractKeyEvent';

export default class KeyUpEvent extends AbstractKeyEvent {
  public readonly event = 'keyUp';

  protected get validationType(): typeof KeyUpEventType {
    return KeyUpEventType;
  }
}
