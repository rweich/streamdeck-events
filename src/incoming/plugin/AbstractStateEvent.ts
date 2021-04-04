import AbstractIncomingExtendedEvent from '../AbstractIncomingExtendedEvent';
import { StateEventType } from '../streamdecktypes/StateEventType';
import { Static } from '@sinclair/typebox';

export default abstract class AbstractStateEvent extends AbstractIncomingExtendedEvent {
  protected eventPayload!: Static<typeof StateEventType>;

  public get settings(): unknown {
    return this.eventPayload.payload.settings;
  }

  public get row(): number {
    return this.eventPayload.payload.coordinates.row;
  }

  public get column(): number {
    return this.eventPayload.payload.coordinates.column;
  }

  public get isInMultiAction(): boolean {
    return this.eventPayload.payload.isInMultiAction;
  }

  public get state(): number | undefined {
    return this.eventPayload.payload.state;
  }

  protected get validationType(): typeof StateEventType {
    return StateEventType;
  }
}
