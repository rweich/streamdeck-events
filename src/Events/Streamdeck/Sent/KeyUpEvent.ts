import AbstractKeyEvent, { KeyOptions } from '@/Events/Streamdeck/Sent/AbstractKeyEvent';

export default class KeyUpEvent extends AbstractKeyEvent {
  public constructor(action: string, context: string, options?: Partial<KeyOptions>) {
    super('keyUp', action, context, options);
  }
}
