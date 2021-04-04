import AbstractKeyEvent from './AbstractKeyEvent';
import { KeyDownEventType } from '../streamdecktypes/KeyEventType';

export default class KeyDownEvent extends AbstractKeyEvent {
  protected get validationType(): typeof KeyDownEventType {
    return KeyDownEventType;
  }
}
