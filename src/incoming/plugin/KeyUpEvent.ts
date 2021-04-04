import AbstractKeyEvent from './AbstractKeyEvent';
import { KeyUpEventType } from '../streamdecktypes/KeyEventType';

export default class KeyUpEvent extends AbstractKeyEvent {
  protected get validationType(): typeof KeyUpEventType {
    return KeyUpEventType;
  }
}
