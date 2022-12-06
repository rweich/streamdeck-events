import AbstractReceivedContextEvent from "@/Events/Received/AbstractReceivedContextEvent";
import {SetFeedbackLayoutType} from "@/StreamdeckTypes/Received/SetFeedbackLayoutType";

export default class SetFeedbackLayoutEvent extends AbstractReceivedContextEvent {
  public readonly event = 'setFeedbackLayout';
  protected readonly eventPayload!: SetFeedbackLayoutType;

  public get layout(): string {
    return this.eventPayload.payload.layout;
  }

  protected get validationType(): typeof SetFeedbackLayoutType {
    return SetFeedbackLayoutType;
  }
}
