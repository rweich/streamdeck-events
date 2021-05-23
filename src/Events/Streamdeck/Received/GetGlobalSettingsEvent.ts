import AbstractReceivedContextEvent from '@/Events/Received/AbstractReceivedContextEvent';
import { GetGlobalSettingsType } from '@/StreamdeckTypes/Received';

export default class GetGlobalSettingsEvent extends AbstractReceivedContextEvent {
  public readonly event = 'getGlobalSettings';

  protected get validationType(): typeof GetGlobalSettingsType {
    return GetGlobalSettingsType;
  }
}
