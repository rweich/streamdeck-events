import AbstractSentSetterEvent from './AbstractSentSetterEvent';

export default class SetGlobalSettingsEvent extends AbstractSentSetterEvent {
  public readonly event = 'setGlobalSettings';
  protected readonly payload: unknown;

  constructor(context: string, payload: unknown) {
    super(context);
    this.payload = payload;
  }
}
