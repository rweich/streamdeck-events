import { Static, Type } from '@sinclair/typebox';

import { BaseFeedbackComponentProperties, OptionalNullable } from './BaseFeedbackComponent';

export const PixmapFeedbackComponentProperties = {
  ...BaseFeedbackComponentProperties,

  value: OptionalNullable(Type.String()),
};
export const PixmapFeedbackComponent = Type.Object(PixmapFeedbackComponentProperties);
export type PixmapFeedbackComponent = Static<typeof PixmapFeedbackComponent>;
