import AbstractVisibilityEvent from '@/Events/Received/Plugin/AbstractVisibilityEvent';
import { WillAppearType } from '@/StreamdeckTypes/Sent';

export default class WillAppearEvent extends AbstractVisibilityEvent {
  public readonly event = 'willAppear';

  protected get validationType(): typeof WillAppearType {
    return WillAppearType;
  }
}
