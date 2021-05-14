import AbstractSentSetterEvent from '../AbstractSentSetterEvent';
import { SentPluginEvents } from './SentPluginEvents';

export default class SendToPropertyInspectorEvent extends AbstractSentSetterEvent {
  public readonly event = SentPluginEvents.SendToPropertyInspector;
  protected readonly payload: unknown;
  private readonly action: string;

  constructor(action: string, context: string, payload: unknown) {
    super(context);
    this.action = action;
    this.payload = payload;
  }

  protected get jsonProps(): string[] {
    return [...super.jsonProps, 'action'];
  }
}
