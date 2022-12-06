import AbstractSentSetterEvent from "@/Events/Sent/AbstractSentSetterEvent";

export default class SetFeedbackLayoutEvent extends AbstractSentSetterEvent {
  public readonly event = 'setFeedbackLayout';
  public readonly layout: string;

  constructor(layout: string, context: string) {
    super(context);
    this.layout = layout;
  }

  protected get payload(): unknown {
    return {
      layout: this.layout
    };
  }
}
