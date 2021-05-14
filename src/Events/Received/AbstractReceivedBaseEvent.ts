import { BaseEventType } from '@/StreamdeckTypes/BaseEventType';
import { Static } from '@sinclair/typebox';
import assertType from './AssertType';

export default abstract class AbstractReceivedBaseEvent {
  protected readonly eventPayload: BaseEventType;

  public constructor(payload: unknown) {
    this.assertType(payload);
    this.eventPayload = payload;
  }

  public get event(): string {
    return this.eventPayload.event;
  }

  protected abstract get validationType(): typeof BaseEventType;

  protected assertType(payload: unknown): asserts payload is Static<AbstractReceivedBaseEvent['validationType']> {
    assertType(this.validationType, payload);
  }
}
