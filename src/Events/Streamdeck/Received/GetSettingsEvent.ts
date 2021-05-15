import AbstractReceivedContextEvent from '@/Events/Received/AbstractReceivedContextEvent';
import { GetSettingsType } from '@/StreamdeckTypes/Received';

export default class GetSettingsEvent extends AbstractReceivedContextEvent {
  protected get validationType(): typeof GetSettingsType {
    return GetSettingsType;
  }
}
