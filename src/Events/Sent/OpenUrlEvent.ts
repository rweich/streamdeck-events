import AbstractEvent from './AbstractEvent';

export default class OpenUrlEvent extends AbstractEvent {
  public readonly event = 'openUrl';
  private readonly payload: Record<'url', string>;

  constructor(url: string) {
    super();
    this.payload = { url };
  }

  protected get jsonProps(): string[] {
    return [...super.jsonProps, 'payload'];
  }
}
