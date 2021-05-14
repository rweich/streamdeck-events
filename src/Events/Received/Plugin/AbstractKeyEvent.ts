import AbstractReceivedExtendedEvent from '../AbstractReceivedExtendedEvent';
import { BaseKeyType } from '@/StreamdeckTypes/BaseKeyType';

export default abstract class AbstractKeyEvent extends AbstractReceivedExtendedEvent {
  protected readonly eventPayload!: BaseKeyType;

  public get row(): number {
    return this.eventPayload.payload.coordinates.row;
  }

  public get column(): number {
    return this.eventPayload.payload.coordinates.column;
  }

  public get isInMultiAction(): boolean {
    return this.eventPayload.payload.isInMultiAction;
  }

  protected get validationType(): typeof BaseKeyType {
    return BaseKeyType;
  }
}
