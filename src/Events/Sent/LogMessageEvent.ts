import AbstractEvent from './AbstractEvent';
import { SentEvents } from './SentEvents';

export default class LogMessageEvent extends AbstractEvent {
  public readonly event = SentEvents.LogMessage;
  private readonly payload: Record<'message', string>;

  constructor(message: string) {
    super();
    this.payload = { message };
  }

  protected get jsonProps(): string[] {
    return [...super.jsonProps, 'payload'];
  }
}
