import AbstractReceivedContextEvent from '@/Events/Received/AbstractReceivedContextEvent';
import { GetGlobalSettingsType } from '@/StreamdeckTypes/Received';

export default class GetGlobalSettingsEvent extends AbstractReceivedContextEvent {
  public get event(): 'getGlobalSettings' {
    return 'getGlobalSettings';
  }

  protected get validationType(): typeof GetGlobalSettingsType {
    return GetGlobalSettingsType;
  }
}
