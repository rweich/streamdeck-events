import AbstractReceivedContextEvent from "@/Events/Received/AbstractReceivedContextEvent";
import {SetFeedbackType} from "@/StreamdeckTypes/Received/SetFeedbackType";

export default class SetFeedbackEvent extends AbstractReceivedContextEvent {
  public readonly event = 'setFeedback';
  protected readonly eventPayload!: SetFeedbackType;

  public get payload(): unknown {
    return this.eventPayload.payload;
  }

  protected get validationType(): typeof SetFeedbackType {
    return SetFeedbackType;
  }
}
