import AbstractStateEvent from './AbstractStateEvent';
import { WillDisappearType } from '@/StreamdeckTypes/Sent';

export default class WillDisappearEvent extends AbstractStateEvent {
  public readonly event = 'willDisappear';

  protected get validationType(): typeof WillDisappearType {
    return WillDisappearType;
  }
}
