import AbstractEvent from './AbstractEvent';

export default class LogMessageEvent extends AbstractEvent {
  public readonly event = 'logMessage';
  private readonly payload: Record<'message', string>;

  constructor(message: string) {
    super();
    this.payload = { message };
  }

  protected get jsonProps(): string[] {
    return [...super.jsonProps, 'payload'];
  }
}
