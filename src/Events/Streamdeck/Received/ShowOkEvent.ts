import AbstractReceivedContextEvent from '@/Events/Received/AbstractReceivedContextEvent';
import { ShowOkType } from '@/StreamdeckTypes/Received';

export default class ShowOkEvent extends AbstractReceivedContextEvent {
  public get event(): 'showOk' {
    return 'showOk';
  }

  protected get validationType(): typeof ShowOkType {
    return ShowOkType;
  }
}
