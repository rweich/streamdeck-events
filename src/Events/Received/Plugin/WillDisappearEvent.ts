import AbstractStateEvent from './AbstractStateEvent';
import { WillDisappearType } from '@/StreamdeckTypes';

export default class WillDisappearEvent extends AbstractStateEvent {
  protected get validationType(): typeof WillDisappearType {
    return WillDisappearType;
  }
}
