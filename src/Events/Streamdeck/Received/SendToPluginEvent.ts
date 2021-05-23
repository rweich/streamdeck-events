import AbstractReceivedContextEvent from '@/Events/Received/AbstractReceivedContextEvent';
import { SendToPluginType } from '@/StreamdeckTypes/Received';

export default class SendToPluginEvent extends AbstractReceivedContextEvent {
  public readonly event = 'sendToPlugin';
  protected readonly eventPayload!: SendToPluginType;

  public get action(): string {
    return this.eventPayload.action;
  }

  public get payload(): unknown {
    return this.eventPayload.payload;
  }

  protected get validationType(): typeof SendToPluginType {
    return SendToPluginType;
  }
}
