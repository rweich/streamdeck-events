import AbstractEvent from '@/Events/Streamdeck/Sent/AbstractEvent';
import { DidReceiveGlobalSettingsType } from '@/StreamdeckTypes/Sent';

export default class DidReceiveGlobalSettingsEvent extends AbstractEvent {
  protected data: DidReceiveGlobalSettingsType;

  constructor(settings: Record<string, unknown>) {
    super();
    this.data = {
      event: 'didReceiveGlobalSettings',
      payload: {
        settings: settings,
      },
    };
  }
}
