import AbstractSentSetterEvent from './AbstractSentSetterEvent';
import { SentEvents } from './SentEvents';

export default class SetSettingsEvent extends AbstractSentSetterEvent {
  public readonly event = SentEvents.SetSettings;
  protected readonly payload: unknown;

  constructor(context: string, payload: unknown) {
    super(context);
    this.payload = payload;
  }
}
