import AbstractStateEvent from './AbstractStateEvent';
import { WillAppearType } from '@/StreamdeckTypes/Sent';

export default class WillAppearEvent extends AbstractStateEvent {
  protected get validationType(): typeof WillAppearType {
    return WillAppearType;
  }
}
