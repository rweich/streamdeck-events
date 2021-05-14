export default abstract class AbstractEvent {
  public abstract readonly event: string;

  protected get jsonProps(): string[] {
    return ['event'];
  }

  public toJSON(): unknown {
    const value = {};
    for (const property of this.jsonProps) {
      Object.assign(value, { [property]: this[property as keyof this] });
    }
    return value;
  }
}
