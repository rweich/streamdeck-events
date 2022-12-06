import AbstractSentSetterEvent from "@/Events/Sent/AbstractSentSetterEvent";

export default class SetFeedbackEvent extends AbstractSentSetterEvent {
  public readonly event = 'setFeedback';
  public readonly payload: unknown;

  constructor(payload: unknown, context: string) {
    super(context);
    this.payload = payload;
  }
}
