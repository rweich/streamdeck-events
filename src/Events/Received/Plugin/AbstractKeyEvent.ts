import AbstractStateEvent from '@/Events/Received/Plugin/AbstractStateEvent';
import { BaseKeyType } from '@/StreamdeckTypes/Sent/BaseKeyType';

export default abstract class AbstractKeyEvent extends AbstractStateEvent {
  protected readonly eventPayload!: BaseKeyType;

  public get userDesiredState(): number | undefined {
    return this.eventPayload.payload.userDesiredState;
  }
}
