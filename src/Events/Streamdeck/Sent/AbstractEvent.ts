export default abstract class AbstractEvent {
  protected readonly data: unknown;

  public toJSON(): unknown {
    return this.data;
  }
}
