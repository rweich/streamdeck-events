import AbstractEvent from './AbstractEvent';

export default abstract class AbstractSentEvent extends AbstractEvent {
  public readonly context: string;

  protected constructor(context: string) {
    super();
    this.context = context;
  }

  protected get jsonProps(): string[] {
    return [...super.jsonProps, 'context'];
  }
}
