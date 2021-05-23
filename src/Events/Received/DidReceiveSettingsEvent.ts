import AbstractStateEvent from './Plugin/AbstractStateEvent';
import { DidReceiveSettingsType } from '@/StreamdeckTypes/Sent';

export default class DidReceiveSettingsEvent extends AbstractStateEvent {
  public readonly event = 'didReceiveSettings';

  protected get validationType(): typeof DidReceiveSettingsType {
    return DidReceiveSettingsType;
  }
}
