import AbstractSentEvent from './AbstractSentEvent';
import { SentEvents } from './SentEvents';

export default class GetSettingsEvent extends AbstractSentEvent {
  public readonly event = SentEvents.GetSettings;

  constructor(context: string) {
    super(context);
  }
}
