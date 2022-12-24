import { BarFeedbackComponent } from './BarFeedbackComponent';
import { GrooveBarFeedbackComponent } from './GrooveBarFeedbackComponent';
import { PixmapFeedbackComponent } from './PixmapFeedbackComponent';
import { PlaccardFeedbackComponent } from './PlaccardFeedbackComponent';
import { TextFeedbackComponent } from './TextFeedbackComponent';

export { BarFeedbackComponent } from './BarFeedbackComponent';
export { GrooveBarFeedbackComponent } from './GrooveBarFeedbackComponent';
export { PixmapFeedbackComponent } from './PixmapFeedbackComponent';
export { PlaccardFeedbackComponent } from './PlaccardFeedbackComponent';
export { TextFeedbackComponent } from './TextFeedbackComponent';

export type AnyComponent =
  | BarFeedbackComponent
  | GrooveBarFeedbackComponent
  | PixmapFeedbackComponent
  | PlaccardFeedbackComponent
  | TextFeedbackComponent
  | string
  | number
  | null;
