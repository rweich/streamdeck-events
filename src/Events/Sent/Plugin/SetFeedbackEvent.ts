import AbstractSentSetterEvent from '@/Events/Sent/AbstractSentSetterEvent';
import { LayoutFeedback } from '@/StreamdeckTypes/Received/Feedback/LayoutFeedback';

export default class SetFeedbackEvent extends AbstractSentSetterEvent {
  public readonly event = 'setFeedback';
  public readonly payload: LayoutFeedback;

  constructor(payload: LayoutFeedback, context: string) {
    super(context);
    this.payload = payload;
  }
}
