import AbstractReceivedContextEvent from '@/Events/Received/AbstractReceivedContextEvent';
import { BaseSetterType } from '@/StreamdeckTypes/Received/BaseSetterType';
import { TargetEnum } from '@/Events/Sent/Plugin';

export default abstract class AbstractSetterEvent extends AbstractReceivedContextEvent {
  protected readonly eventPayload!: BaseSetterType;

  public get state(): number | undefined {
    return this.eventPayload.payload.state;
  }

  public get target(): TargetEnum {
    return this.eventPayload.payload.target;
  }

  protected get validationType(): typeof BaseSetterType {
    return BaseSetterType;
  }
}
