import AbstractStateEvent from './plugin/AbstractStateEvent';
import { DidReceiveSettingsType } from './streamdecktypes/SettingsEventType';

export default class DidReceiveSettingsEvent extends AbstractStateEvent {
  protected get validationType(): typeof DidReceiveSettingsType {
    return DidReceiveSettingsType;
  }
}
