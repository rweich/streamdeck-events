import AbstractSentSetterEvent from '@/Events/Sent/AbstractSentSetterEvent';
import { LayoutFeedbackKey } from '@/StreamdeckTypes/Received/Feedback/LayoutFeedback';

export default class SetFeedbackLayoutEvent extends AbstractSentSetterEvent {
  public readonly event = 'setFeedbackLayout';
  public readonly layout: LayoutFeedbackKey;

  constructor(layout: LayoutFeedbackKey, context: string) {
    super(context);
    this.layout = layout;
  }

  protected get payload(): unknown {
    return {
      layout: this.layout,
    };
  }
}
