import AbstractReceivedContextEvent from '@/Events/Received/AbstractReceivedContextEvent';
import { ShowAlertType } from '@/StreamdeckTypes/Received';

export default class ShowAlertEvent extends AbstractReceivedContextEvent {
  protected get validationType(): typeof ShowAlertType {
    return ShowAlertType;
  }
}
