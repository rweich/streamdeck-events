import AbstractReceivedContextEvent from '@/Events/Received/AbstractReceivedContextEvent';
import { SetGlobalSettingsType } from '@/StreamdeckTypes/Received';

export default class SetGlobalSettingsEvent extends AbstractReceivedContextEvent {
  public readonly event = 'setGlobalSettings';
  protected readonly eventPayload!: SetGlobalSettingsType;

  public get payload(): unknown {
    return this.eventPayload.payload;
  }

  protected get validationType(): typeof SetGlobalSettingsType {
    return SetGlobalSettingsType;
  }
}
