import AbstractIncomingBaseEvent from './AbstractIncomingBaseEvent';
import { SendToEventType } from './streamdecktypes/SendToEventType';
import { Static } from '@sinclair/typebox';

export default abstract class AbstractSendToEvent extends AbstractIncomingBaseEvent {
  protected readonly eventPayload!: Static<typeof SendToEventType>;

  public get action(): string {
    return this.eventPayload.action;
  }

  public get context(): string {
    return this.eventPayload.context;
  }

  public get payload(): Record<string, unknown> {
    return this.eventPayload.payload;
  }

  protected get validationType(): typeof SendToEventType {
    return SendToEventType;
  }
}
