import AbstractReceivedContextEvent from '@/Events/Received/AbstractReceivedContextEvent';
import { SetGlobalSettingsType } from '@/StreamdeckTypes/Received';

export default class SetGlobalSettingsEvent extends AbstractReceivedContextEvent {
  protected readonly eventPayload!: SetGlobalSettingsType;

  public get event(): 'setGlobalSettings' {
    return 'setGlobalSettings';
  }

  public get payload(): unknown {
    return this.eventPayload.payload;
  }

  protected get validationType(): typeof SetGlobalSettingsType {
    return SetGlobalSettingsType;
  }
}
