import { Static, Type } from '@sinclair/typebox';

import { BarFeedbackComponentProperties } from './BarFeedbackComponent';
import { OptionalNullable } from './BaseFeedbackComponent';

export const GrooveBarFeedbackComponentProperties = {
  ...BarFeedbackComponentProperties,

  bar_h: OptionalNullable(Type.Number({ default: 12, minimum: 0 })),
};
export const GrooveBarFeedbackComponent = Type.Object(GrooveBarFeedbackComponentProperties);
export type GrooveBarFeedbackComponent = Static<typeof GrooveBarFeedbackComponent>;
