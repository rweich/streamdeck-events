import AbstractReceivedContextEvent from '@/Events/Received/AbstractReceivedContextEvent';
import { TargetEnum } from '@/Events/Sent/Plugin';
import { BaseSetterType } from '@/StreamdeckTypes/Received/BaseSetterType';

export default abstract class AbstractSetterEvent extends AbstractReceivedContextEvent {
  protected readonly eventPayload!: BaseSetterType;

  public get state(): number | undefined {
    return this.eventPayload.payload.state;
  }

  public get target(): TargetEnum {
    return this.eventPayload.payload.target;
  }
}
