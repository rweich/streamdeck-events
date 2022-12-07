import AbstractSentSetterEvent from '@/Events/Sent/AbstractSentSetterEvent';
import { LayoutFeedbackKey } from '@/StreamdeckTypes/Received/Feedback/LayoutFeedback';

export default class SetFeedbackLayoutEvent extends AbstractSentSetterEvent {
  public readonly event = 'setFeedbackLayout';
  public readonly layout: string;

  constructor(layout: LayoutFeedbackKey | string, context: string) {
    super(context);
    this.layout = layout;
  }

  protected get payload(): unknown {
    return {
      layout: this.layout,
    };
  }
}
