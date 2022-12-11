import AbstractVisibilityEvent from '@/Events/Received/Plugin/AbstractVisibilityEvent';
import { WillDisappearType } from '@/StreamdeckTypes/Sent';

export default class WillDisappearEvent extends AbstractVisibilityEvent {
  public readonly event = 'willDisappear';

  protected get validationType(): typeof WillDisappearType {
    return WillDisappearType;
  }
}
