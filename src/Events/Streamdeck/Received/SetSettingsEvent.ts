import AbstractReceivedContextEvent from '@/Events/Received/AbstractReceivedContextEvent';
import { SetSettingsType } from '@/StreamdeckTypes/Received';

export default class SetSettingsEvent extends AbstractReceivedContextEvent {
  protected readonly eventPayload!: SetSettingsType;

  public get payload(): unknown {
    return this.eventPayload.payload;
  }

  protected get validationType(): typeof SetSettingsType {
    return SetSettingsType;
  }
}
