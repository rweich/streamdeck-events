import AbstractStateEvent from './AbstractStateEvent';
import { WillDisappearEventType } from '../streamdecktypes/StateEventType';

export default class WillDisappearEvent extends AbstractStateEvent {
  protected get validationType(): typeof WillDisappearEventType {
    return WillDisappearEventType;
  }
}
