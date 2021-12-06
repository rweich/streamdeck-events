import AbstractReceivedExtendedEvent from '../AbstractReceivedExtendedEvent';
import { BaseKeyType } from '@/StreamdeckTypes/Sent/BaseKeyType';

export default abstract class AbstractKeyEvent extends AbstractReceivedExtendedEvent {
  protected readonly eventPayload!: BaseKeyType;

  public get row(): number | undefined {
    return this.eventPayload.payload.coordinates?.row;
  }

  public get column(): number | undefined {
    return this.eventPayload.payload.coordinates?.column;
  }

  public get isInMultiAction(): boolean {
    return this.eventPayload.payload.isInMultiAction;
  }

  public get state(): number | undefined {
    return this.eventPayload.payload.state;
  }
}
