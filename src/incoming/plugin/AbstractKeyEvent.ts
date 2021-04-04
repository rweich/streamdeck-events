import AbstractIncomingExtendedEvent from '../AbstractIncomingExtendedEvent';
import { KeyEventType } from '../streamdecktypes/KeyEventType';
import { Static } from '@sinclair/typebox';

export default abstract class AbstractKeyEvent extends AbstractIncomingExtendedEvent {
  protected readonly eventPayload!: Static<typeof KeyEventType>;

  public get row(): number {
    return this.eventPayload.payload.coordinates.row;
  }

  public get column(): number {
    return this.eventPayload.payload.coordinates.column;
  }

  public get isInMultiAction(): boolean {
    return this.eventPayload.payload.isInMultiAction;
  }

  protected get validationType(): typeof KeyEventType {
    return KeyEventType;
  }
}
