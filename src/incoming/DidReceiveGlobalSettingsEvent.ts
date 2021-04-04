import AbstractIncomingBaseEvent from './AbstractIncomingBaseEvent';
import { DidReceiveGlobalSettingsType } from './streamdecktypes/SettingsEventType';
import { Static } from '@sinclair/typebox';

export default class DidReceiveGlobalSettingsEvent extends AbstractIncomingBaseEvent {
  protected eventPayload!: Static<typeof DidReceiveGlobalSettingsType>;

  public get settings(): unknown {
    return this.eventPayload.payload.settings;
  }

  protected get validationType(): typeof DidReceiveGlobalSettingsType {
    return DidReceiveGlobalSettingsType;
  }
}
