import AbstractStateEvent from './AbstractStateEvent';
import { WillDisappearType } from '@/StreamdeckTypes/Sent';

export default class WillDisappearEvent extends AbstractStateEvent {
  protected get validationType(): typeof WillDisappearType {
    return WillDisappearType;
  }
}
