import AbstractEvent from '@/Events/Streamdeck/Sent/AbstractEvent';
import { BaseStateType } from '@/StreamdeckTypes/Sent/BaseStateType';

export interface StateOptions {
  device: string;
  column: number;
  row: number;
  isInMultiAction: boolean;
  settings: unknown;
}

const defaults: StateOptions = {
  column: 1,
  device: 'device',
  isInMultiAction: false,
  row: 1,
  settings: {},
};

export default abstract class AbstractStateEvent extends AbstractEvent {
  protected readonly data: BaseStateType;

  protected constructor(
    event: 'willAppear' | 'willDisappear' | 'didReceiveSettings',
    action: string,
    context: string,
    options?: Partial<StateOptions>,
  ) {
    super();
    this.data = {
      action,
      context,
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
  }
}
