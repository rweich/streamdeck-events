import { BaseSendToType } from '@/StreamdeckTypes/Sent/BaseSendToType';

import AbstractReceivedBaseEvent from './AbstractReceivedBaseEvent';

export default abstract class AbstractSendToEvent extends AbstractReceivedBaseEvent {
  protected readonly eventPayload!: BaseSendToType;

  public get action(): string {
    return this.eventPayload.action;
  }

  public get context(): string {
    return this.eventPayload.context;
  }

  public get payload(): Record<string, unknown> {
    return this.eventPayload.payload;
  }
}
