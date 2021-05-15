import AbstractReceivedContextEvent from '@/Events/Received/AbstractReceivedContextEvent';
import { BaseExtendedType } from '@/StreamdeckTypes/Sent/BaseExtendedType';

export default abstract class AbstractReceivedExtendedEvent extends AbstractReceivedContextEvent {
  protected readonly eventPayload!: BaseExtendedType;

  public get action(): string {
    return this.eventPayload.action;
  }

  public get device(): string {
    return this.eventPayload.device;
  }
}
