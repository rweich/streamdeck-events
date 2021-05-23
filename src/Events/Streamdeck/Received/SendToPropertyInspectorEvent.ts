import AbstractReceivedContextEvent from '@/Events/Received/AbstractReceivedContextEvent';
import { SendToPropertyInspectorType } from '@/StreamdeckTypes/Received';

export default class SendToPropertyInspectorEvent extends AbstractReceivedContextEvent {
  public readonly event = 'sendToPropertyInspector';
  protected readonly eventPayload!: SendToPropertyInspectorType;

  public get action(): string {
    return this.eventPayload.action;
  }

  public get payload(): unknown {
    return this.eventPayload.payload;
  }

  protected get validationType(): typeof SendToPropertyInspectorType {
    return SendToPropertyInspectorType;
  }
}
