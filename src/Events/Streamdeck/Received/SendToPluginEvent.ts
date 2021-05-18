import AbstractReceivedContextEvent from '@/Events/Received/AbstractReceivedContextEvent';
import { SendToPluginType } from '@/StreamdeckTypes/Received';

export default class SendToPluginEvent extends AbstractReceivedContextEvent {
  protected readonly eventPayload!: SendToPluginType;

  public get event(): 'sendToPlugin' {
    return 'sendToPlugin';
  }

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
