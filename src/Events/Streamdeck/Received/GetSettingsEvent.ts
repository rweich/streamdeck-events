import AbstractReceivedContextEvent from '@/Events/Received/AbstractReceivedContextEvent';
import { GetSettingsType } from '@/StreamdeckTypes/Received';

export default class GetSettingsEvent extends AbstractReceivedContextEvent {
  public get event(): 'getSettings' {
    return 'getSettings';
  }

  protected get validationType(): typeof GetSettingsType {
    return GetSettingsType;
  }
}
