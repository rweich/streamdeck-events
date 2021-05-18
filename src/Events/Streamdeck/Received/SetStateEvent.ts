import AbstractReceivedContextEvent from '@/Events/Received/AbstractReceivedContextEvent';
import { SetStateType } from '@/StreamdeckTypes/Received';

export default class SetStateEvent extends AbstractReceivedContextEvent {
  protected readonly eventPayload!: SetStateType;

  public get event(): 'setState' {
    return 'setState';
  }

  public get state(): number {
    return this.eventPayload.payload.state;
  }

  protected get validationType(): typeof SetStateType {
    return SetStateType;
  }
}
