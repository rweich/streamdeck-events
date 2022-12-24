import { Static, Type } from '@sinclair/typebox';

import { BarValueType, BaseBarFeedbackComponentProperties } from './BarFeedbackComponent';
import { OptionalNullable } from './BaseFeedbackComponent';

export const GrooveBarFeedbackComponentProperties = {
  ...BaseBarFeedbackComponentProperties,

  bar_h: OptionalNullable(Type.Number({ default: 12, minimum: 0 })),
};
export const GBarFeedbackComponent = Type.Object(GrooveBarFeedbackComponentProperties);
export type GBarFeedbackComponent = Static<typeof GBarFeedbackComponent>;

export const WrappedGBarFeedbackComponent = Type.Union([GBarFeedbackComponent, BarValueType]);
