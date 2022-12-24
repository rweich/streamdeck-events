import { BarFeedbackComponent } from './BarFeedbackComponent';
import { GBarFeedbackComponent } from './GBarFeedbackComponent';
import { PixmapFeedbackComponent } from './PixmapFeedbackComponent';
import { PlaccardFeedbackComponent } from './PlaccardFeedbackComponent';
import { TextFeedbackComponent } from './TextFeedbackComponent';

export { BarFeedbackComponent } from './BarFeedbackComponent';
export { GBarFeedbackComponent } from './GBarFeedbackComponent';
export { PixmapFeedbackComponent } from './PixmapFeedbackComponent';
export { PlaccardFeedbackComponent } from './PlaccardFeedbackComponent';
export { TextFeedbackComponent } from './TextFeedbackComponent';

export type AnyComponent =
  | BarFeedbackComponent
  | GBarFeedbackComponent
  | PixmapFeedbackComponent
  | PlaccardFeedbackComponent
  | TextFeedbackComponent
  | string
  | number
  | null;
