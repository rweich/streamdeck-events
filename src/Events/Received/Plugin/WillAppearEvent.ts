import { WillAppearType } from '@/StreamdeckTypes/Sent';

import AbstractStateEvent from './AbstractStateEvent';

export default class WillAppearEvent extends AbstractStateEvent {
  public readonly event = 'willAppear';

  protected get validationType(): typeof WillAppearType {
    return WillAppearType;
  }
}
