import AbstractReceivedContextEvent from '@/Events/Received/AbstractReceivedContextEvent';
import { LayoutFeedbackKey } from '@/StreamdeckTypes/Received/Feedback/LayoutFeedback';
import { SetFeedbackLayoutType } from '@/StreamdeckTypes/Received/SetFeedbackLayoutType';

export default class SetFeedbackLayoutEvent extends AbstractReceivedContextEvent {
  public readonly event = 'setFeedbackLayout';
  protected readonly eventPayload!: SetFeedbackLayoutType;

  public get layout(): LayoutFeedbackKey {
    return this.eventPayload.payload.layout;
  }

  protected get validationType(): typeof SetFeedbackLayoutType {
    return SetFeedbackLayoutType;
  }
}
