import EventInterface from './EventInterface';

export default abstract class AbstractEvent implements EventInterface {
  public abstract readonly event: string;

  protected get jsonProps(): string[] {
    return ['event'];
  }

  public toJSON(): unknown {
    return this.jsonProps.reduce(
      (previous, property) => Object.assign(previous, { [property]: this[property as keyof this] }),
      {},
    );
  }
}
