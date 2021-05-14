import AbstractEvent from './AbstractEvent';
import { SentEvents } from './SentEvents';

export default class OpenUrlEvent extends AbstractEvent {
  public readonly event = SentEvents.OpenUrl;
  private readonly payload: Record<'url', string>;

  constructor(url: string) {
    super();
    this.payload = { url };
  }

  protected get jsonProps(): string[] {
    return [...super.jsonProps, 'payload'];
  }
}
