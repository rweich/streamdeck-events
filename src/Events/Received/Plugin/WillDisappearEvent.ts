import { WillDisappearType } from '@/StreamdeckTypes/Sent';

import AbstractStateEvent from './AbstractStateEvent';

export default class WillDisappearEvent extends AbstractStateEvent {
  public readonly event = 'willDisappear';

  protected get validationType(): typeof WillDisappearType {
    return WillDisappearType;
  }
}
