import AbstractSentEvent from './AbstractSentEvent';

export default class GetSettingsEvent extends AbstractSentEvent {
  public readonly event = 'getSettings';

  constructor(context: string) {
    super(context);
  }
}
