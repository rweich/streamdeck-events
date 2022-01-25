import { DidReceiveSettingsType } from '@/StreamdeckTypes/Sent';

import AbstractStateEvent from './Plugin/AbstractStateEvent';

export default class DidReceiveSettingsEvent extends AbstractStateEvent {
  public readonly event = 'didReceiveSettings';

  protected get validationType(): typeof DidReceiveSettingsType {
    return DidReceiveSettingsType;
  }
}
