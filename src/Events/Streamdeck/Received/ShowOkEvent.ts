import AbstractReceivedContextEvent from '@/Events/Received/AbstractReceivedContextEvent';
import { ShowOkType } from '@/StreamdeckTypes/Received';

export default class ShowOkEvent extends AbstractReceivedContextEvent {
  public readonly event = 'showOk';

  protected get validationType(): typeof ShowOkType {
    return ShowOkType;
  }
}
