import AbstractReceivedExtendedEvent from '../AbstractReceivedExtendedEvent';
import { BaseStateType } from '@/StreamdeckTypes/Sent/BaseStateType';

export default abstract class AbstractStateEvent extends AbstractReceivedExtendedEvent {
  protected eventPayload!: BaseStateType;

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

  protected get validationType(): typeof BaseStateType {
    return BaseStateType;
  }
}
