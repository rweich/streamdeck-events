import AbstractReceivedBaseEvent from '@/Events/Received/AbstractReceivedBaseEvent';
import { BaseContextType } from '@/StreamdeckTypes/Sent/BaseContextType';

export default abstract class AbstractReceivedContextEvent extends AbstractReceivedBaseEvent {
  protected readonly eventPayload!: BaseContextType;

  public get context(): string {
    return this.eventPayload.context;
  }
}
