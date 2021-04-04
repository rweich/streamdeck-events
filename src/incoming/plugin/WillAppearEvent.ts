import AbstractStateEvent from './AbstractStateEvent';
import { WillAppearEventType } from '../streamdecktypes/StateEventType';

export default class WillAppearEvent extends AbstractStateEvent {
  protected get validationType(): typeof WillAppearEventType {
    return WillAppearEventType;
  }
}
