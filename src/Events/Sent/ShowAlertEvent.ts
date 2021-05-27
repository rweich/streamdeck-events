import AbstractSentEvent from '@/Events/Sent/AbstractSentEvent';

export default class ShowAlertEvent extends AbstractSentEvent {
  public readonly event = 'showAlert';
}
