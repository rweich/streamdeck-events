import AbstractSentEvent from './AbstractSentEvent';

export default abstract class AbstractSentSetterEvent extends AbstractSentEvent {
  protected abstract get payload(): unknown;

  protected get jsonProps(): string[] {
    return [...super.jsonProps, 'payload'];
  }
}
