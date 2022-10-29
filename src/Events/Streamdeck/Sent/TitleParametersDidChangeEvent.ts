import AbstractEvent from '@/Events/Streamdeck/Sent/AbstractEvent';
import { TitleParametersDidChangeType } from '@/StreamdeckTypes/Sent';

export interface TitleParametersDidChangeOptions {
  column: number;
  device: string;
  fontFamily: string;
  fontSize: number;
  fontStyle: string;
  fontUnderline: boolean;
  row: number;
  settings: unknown;
  showTitle: boolean;
  state: number;
  title: string;
  titleAlignment: 'top' | 'bottom' | 'middle';
  titleColor: string;
}

const defaults: TitleParametersDidChangeOptions = {
  column: 1,
  device: 'device',
  fontFamily: '',
  fontSize: 12,
  fontStyle: '',
  fontUnderline: false,
  row: 1,
  settings: {},
  showTitle: true,
  state: 0,
  title: 'new title',
  titleAlignment: 'middle',
  titleColor: '#ffffff',
};

export default class TitleParametersDidChangeEvent extends AbstractEvent {
  protected readonly data: TitleParametersDidChangeType;

  constructor(action: string, context: string, options?: Partial<TitleParametersDidChangeOptions>) {
    super();
    this.data = {
      action,
      context,
      device: options?.device ?? defaults.device,
      event: 'titleParametersDidChange',
      payload: {
        coordinates: {
          column: options?.column ?? defaults.column,
          row: options?.row ?? defaults.row,
        },
        settings: options?.settings ?? defaults.settings,
        state: options?.state ?? defaults.state,
        title: options?.title ?? defaults.title,
        titleParameters: {
          fontFamily: options?.fontFamily ?? defaults.fontFamily,
          fontSize: options?.fontSize ?? defaults.fontSize,
          fontStyle: options?.fontStyle ?? defaults.fontStyle,
          fontUnderline: options?.fontUnderline ?? defaults.fontUnderline,
          showTitle: options?.showTitle ?? defaults.showTitle,
          titleAlignment: options?.titleAlignment ?? defaults.titleAlignment,
          titleColor: options?.titleColor ?? defaults.titleColor,
        },
      },
    };
  }
}
