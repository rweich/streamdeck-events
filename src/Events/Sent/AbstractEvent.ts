export default abstract class AbstractEvent {
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
