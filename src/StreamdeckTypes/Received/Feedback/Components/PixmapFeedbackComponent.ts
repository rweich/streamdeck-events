import { Static, Type } from '@sinclair/typebox';

import { BaseFeedbackComponentProperties, OptionalNullable } from './BaseFeedbackComponent';

const ValueType = Type.String();

export const PixmapFeedbackComponentProperties = {
  ...BaseFeedbackComponentProperties,

  value: OptionalNullable(ValueType),
};
export const PixmapFeedbackComponent = Type.Object(PixmapFeedbackComponentProperties);
export type PixmapFeedbackComponent = Static<typeof PixmapFeedbackComponent>;

export const WrappedPixmapFeedbackComponent = Type.Union([PixmapFeedbackComponent, ValueType]);
