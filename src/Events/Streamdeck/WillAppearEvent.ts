import { WillAppearType } from '@/StreamdeckTypes';

export interface WillAppearOptions {
  device: string;
  event: string;
  column: number;
  row: number;
  isInMultiAction: boolean;
  settings: unknown;
}

const WillAppearDefaults: WillAppearOptions = {
  column: 1,
  device: 'device',
  event: 'willAppear',
  isInMultiAction: false,
  row: 1,
  settings: {},
};

export default class WillAppearEvent {
  private readonly data: WillAppearType;

  public constructor(action: string, context: string, options?: Partial<Omit<WillAppearOptions, 'event'>>) {
    this.data = {
      action,
      context,
      device: options?.device || WillAppearDefaults.device,
      event: WillAppearDefaults.event,
      payload: {
        coordinates: {
          column: options?.column || WillAppearDefaults.column,
          row: options?.row || WillAppearDefaults.row,
        },
        isInMultiAction: options?.isInMultiAction || WillAppearDefaults.isInMultiAction,
        settings: options?.settings || WillAppearDefaults.settings,
      },
    };
  }

  public toJSON(): unknown {
    return this.data;
  }
}
