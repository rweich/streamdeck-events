import AbstractStateEvent, { StateOptions } from '@/Events/Streamdeck/Sent/AbstractStateEvent';

export default class WillAppearEvent extends AbstractStateEvent {
  public constructor(action: string, context: string, options?: Partial<StateOptions>) {
    super('willAppear', action, context, options);
  }
}
