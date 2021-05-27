import AbstractSentEvent from '@/Events/Sent/AbstractSentEvent';

export default class SetStateEvent extends AbstractSentEvent {
  public readonly event = 'setState';
  private readonly payload: Record<'state', number>;

  constructor(state: number, context: string) {
    super(context);
    this.payload = { state };
  }

  protected get jsonProps(): string[] {
    return [...super.jsonProps, 'payload'];
  }
}
