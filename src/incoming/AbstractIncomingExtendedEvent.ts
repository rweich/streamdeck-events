import AbstractIncomingBaseEvent from './AbstractIncomingBaseEvent';
import { ExtendedEventType } from './streamdecktypes/ExtendedEventType';
import { Static } from '@sinclair/typebox';

export default abstract class AbstractIncomingExtendedEvent extends AbstractIncomingBaseEvent {
  protected readonly eventPayload!: Static<typeof ExtendedEventType>;

  public get action(): string {
    return this.eventPayload.action;
  }

  public get context(): string {
    return this.eventPayload.context;
  }

  public get device(): string {
    return this.eventPayload.device;
  }

  protected get validationType(): typeof ExtendedEventType {
    return ExtendedEventType;
  }
}
