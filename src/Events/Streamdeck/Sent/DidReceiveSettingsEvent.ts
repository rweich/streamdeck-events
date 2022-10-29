import AbstractStateEvent, { StateOptions } from '@/Events/Streamdeck/Sent/AbstractStateEvent';

export default class DidReceiveSettingsEvent extends AbstractStateEvent {
  constructor(action: string, context: string, options?: Partial<StateOptions>) {
    super('didReceiveSettings', action, context, options);
  }
}
