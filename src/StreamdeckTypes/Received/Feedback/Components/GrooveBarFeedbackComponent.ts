import { Static, Type } from '@sinclair/typebox';

import { BarFeedbackComponentProperties, BarValueType } from './BarFeedbackComponent';
import { OptionalNullable } from './BaseFeedbackComponent';

export const GrooveBarFeedbackComponentProperties = {
  ...BarFeedbackComponentProperties,

  bar_h: OptionalNullable(Type.Number({ default: 12, minimum: 0 })),
};
export const GrooveBarFeedbackComponent = Type.Object(GrooveBarFeedbackComponentProperties);
export type GrooveBarFeedbackComponent = Static<typeof GrooveBarFeedbackComponent>;

export const WrappedGrooveBarFeedbackComponent = Type.Union([GrooveBarFeedbackComponent, BarValueType]);
