import AbstractKeyEvent, { KeyOptions } from '@/Events/Streamdeck/Sent/AbstractKeyEvent';

export default class KeyDownEvent extends AbstractKeyEvent {
  public constructor(action: string, context: string, options?: Partial<KeyOptions>) {
    super('keyDown', action, context, options);
  }
}
