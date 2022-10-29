import AbstractEvent from '@/Events/Streamdeck/Sent/AbstractEvent';
import { BaseKeyType } from '@/StreamdeckTypes/Sent/BaseKeyType';

export interface KeyOptions {
  device: string;
  column: number;
  row: number;
  isInMultiAction: boolean;
  settings: unknown;
  state?: number;
  userDesiredState?: 0 | 1;
}

const defaults: KeyOptions = {
  column: 1,
  device: 'device',
  isInMultiAction: false,
  row: 1,
  settings: {},
};

export default abstract class AbstractKeyEvent extends AbstractEvent {
  protected readonly data: BaseKeyType;

  protected constructor(event: string, action: string, context: string, options?: Partial<KeyOptions>) {
    super();
    this.data = {
      action: action,
      context: context,
      device: options?.device ?? defaults.device,
      event: event,
      payload: {
        coordinates: {
          column: options?.column ?? defaults.column,
          row: options?.row ?? defaults.row,
        },
        isInMultiAction: options?.isInMultiAction ?? defaults.isInMultiAction,
        settings: options?.settings ?? defaults.settings,
      },
    };
    if (options?.state !== undefined) {
      this.data.payload = { ...this.data.payload, state: options.state };
    }
    if (options?.userDesiredState !== undefined) {
      this.data.payload = { ...this.data.payload, userDesiredState: options.userDesiredState };
    }
  }
}
