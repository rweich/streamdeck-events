import AbstractSentEvent from '@/Events/Sent/AbstractSentEvent';

export default class SwitchToProfileEvent extends AbstractSentEvent {
  public readonly event = 'switchToProfile';
  private readonly device: string;
  private readonly payload: Record<'profile', string>;

  constructor(profile: string, context: string, device: string) {
    super(context);
    this.device = device;
    this.payload = { profile };
  }

  protected get jsonProps(): string[] {
    return [...super.jsonProps, 'device', 'payload'];
  }
}
