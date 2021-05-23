import AbstractSentSetterEvent from './AbstractSentSetterEvent';

export default class SetSettingsEvent extends AbstractSentSetterEvent {
  public readonly event = 'setSettings';
  protected readonly payload: unknown;

  constructor(context: string, payload: unknown) {
    super(context);
    this.payload = payload;
  }
}
