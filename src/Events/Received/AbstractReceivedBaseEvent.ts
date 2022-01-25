import { Static } from '@sinclair/typebox';

import { BaseEventType } from '@/StreamdeckTypes/Sent/BaseEventType';

import assertType from './AssertType';

export default abstract class AbstractReceivedBaseEvent {
  public abstract readonly event: string;
  protected readonly eventPayload: BaseEventType;

  public constructor(payload: unknown) {
    this.assertType(payload);
    this.eventPayload = payload;
  }

  protected abstract get validationType(): typeof BaseEventType;

  protected assertType(payload: unknown): asserts payload is Static<AbstractReceivedBaseEvent['validationType']> {
    assertType(this.validationType, payload);
  }
}
