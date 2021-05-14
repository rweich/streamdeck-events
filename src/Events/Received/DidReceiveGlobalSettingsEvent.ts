import AbstractReceivedBaseEvent from './AbstractReceivedBaseEvent';
import { DidReceiveGlobalSettingsType } from '@/StreamdeckTypes/Sent';

export default class DidReceiveGlobalSettingsEvent extends AbstractReceivedBaseEvent {
  protected eventPayload!: DidReceiveGlobalSettingsType;

  public get settings(): unknown {
    return this.eventPayload.payload.settings;
  }

  protected get validationType(): typeof DidReceiveGlobalSettingsType {
    return DidReceiveGlobalSettingsType;
  }
}
