import AbstractReceivedBaseEvent from './AbstractReceivedBaseEvent';
import { BaseExtendedType } from '@/StreamdeckTypes/BaseExtendedType';

export default abstract class AbstractReceivedExtendedEvent extends AbstractReceivedBaseEvent {
  protected readonly eventPayload!: BaseExtendedType;

  public get action(): string {
    return this.eventPayload.action;
  }

  public get context(): string {
    return this.eventPayload.context;
  }

  public get device(): string {
    return this.eventPayload.device;
  }

  protected get validationType(): typeof BaseExtendedType {
    return BaseExtendedType;
  }
}
