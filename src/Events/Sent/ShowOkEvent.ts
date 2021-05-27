import AbstractSentEvent from '@/Events/Sent/AbstractSentEvent';

export default class ShowOkEvent extends AbstractSentEvent {
  public readonly event = 'showOk';
}
