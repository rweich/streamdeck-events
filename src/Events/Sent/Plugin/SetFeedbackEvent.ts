import AbstractSentSetterEvent from '@/Events/Sent/AbstractSentSetterEvent';
import { GenericLayoutFeedback, LayoutFeedback } from '@/StreamdeckTypes/Received/Feedback/LayoutFeedback';

export default class SetFeedbackEvent extends AbstractSentSetterEvent {
  public readonly event = 'setFeedback';
  public readonly payload: GenericLayoutFeedback;

  constructor(payload: LayoutFeedback | GenericLayoutFeedback, context: string) {
    super(context);
    this.payload = payload;
  }
}
