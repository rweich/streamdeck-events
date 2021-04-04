import AbstractIncomingBaseEvent from '../AbstractIncomingBaseEvent';
import { ApplicationEventType } from '../streamdecktypes/ApplicationEventType';
import { Static } from '@sinclair/typebox';

export default abstract class AbstractApplicationEvent extends AbstractIncomingBaseEvent {
  protected readonly eventPayload!: Static<typeof ApplicationEventType>;

  public get application(): string {
    return this.eventPayload.payload.application;
  }
}
