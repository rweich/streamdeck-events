import AbstractSentEvent from './AbstractSentEvent';

export default class GetGlobalSettingsEvent extends AbstractSentEvent {
  public readonly event = 'getGlobalSettings';
}
