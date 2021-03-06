import AbstractReceivedContextEvent from '@/Events/Received/AbstractReceivedContextEvent';
import { SetStateType } from '@/StreamdeckTypes/Received';

export default class SetStateEvent extends AbstractReceivedContextEvent {
  public readonly event = 'setState';
  protected readonly eventPayload!: SetStateType;

  public get state(): number {
    return this.eventPayload.payload.state;
  }

  protected get validationType(): typeof SetStateType {
    return SetStateType;
  }
}
