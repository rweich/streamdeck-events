import AbstractSentSetterEvent from '@/Events/Sent/AbstractSentSetterEvent';
import { LayoutFeedbackKey } from '@/StreamdeckTypes/Received/Feedback/LayoutFeedback';

/**
 * See the documentation in {@link EventsSent#setFeedbackLayout} for information about this class.
 */
export default class SetFeedbackLayoutEvent extends AbstractSentSetterEvent {
  public readonly event = 'setFeedbackLayout';
  public readonly layout: string;

  constructor(layout: string | LayoutFeedbackKey, context: string) {
    super(context);
    this.layout = layout;
  }

  protected get payload(): unknown {
    return {
      layout: this.layout,
    };
  }
}
