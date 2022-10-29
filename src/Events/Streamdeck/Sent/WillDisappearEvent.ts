import AbstractStateEvent, { StateOptions } from '@/Events/Streamdeck/Sent/AbstractStateEvent';

export default class WillDisappearEvent extends AbstractStateEvent {
  public constructor(action: string, context: string, options?: Partial<StateOptions>) {
    super('willDisappear', action, context, options);
  }
}
