import AbstractEvent from './AbstractEvent';

export default abstract class AbstractSentEvent extends AbstractEvent {
  public readonly context: string;

  public constructor(context: string) {
    super();
    this.context = context;
  }

  protected get jsonProps(): string[] {
    return [...super.jsonProps, 'context'];
  }
}
