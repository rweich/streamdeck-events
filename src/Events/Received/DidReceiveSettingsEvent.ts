import AbstractStateEvent from './Plugin/AbstractStateEvent';
import { DidReceiveSettingsType } from '@/StreamdeckTypes';

export default class DidReceiveSettingsEvent extends AbstractStateEvent {
  protected get validationType(): typeof DidReceiveSettingsType {
    return DidReceiveSettingsType;
  }
}
