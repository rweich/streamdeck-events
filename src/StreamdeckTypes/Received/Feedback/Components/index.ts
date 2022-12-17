import { BarFeedbackComponent } from './BarFeedbackComponent';
import { GrooveBarFeedbackComponent } from './GrooveBarFeedbackComponent';
import { PixmapFeedbackComponent } from './PixmapFeedbackComponent';
import { TextFeedbackComponent } from './TextFeedbackComponent';

export { BarFeedbackComponent } from './BarFeedbackComponent';
export { GrooveBarFeedbackComponent } from './GrooveBarFeedbackComponent';
export { PixmapFeedbackComponent } from './PixmapFeedbackComponent';
export { TextFeedbackComponent } from './TextFeedbackComponent';

export type AnyComponent =
  | BarFeedbackComponent
  | GrooveBarFeedbackComponent
  | PixmapFeedbackComponent
  | TextFeedbackComponent
  | string
  | number
  | null;
