import { Static, Type } from '@sinclair/typebox';

import { WrappedPixmapFeedbackComponent } from '@/StreamdeckTypes/Received/Feedback/Components/PixmapFeedbackComponent';
import { BaseLayoutFeedbackProperties } from '@/StreamdeckTypes/Received/Feedback/LayoutFeedback/BaseLayoutFeedback';

export const LayoutA0FeedbackProperties = {
  ...BaseLayoutFeedbackProperties,

  canvas: Type.Optional(WrappedPixmapFeedbackComponent),
  'full-canvas': Type.Optional(WrappedPixmapFeedbackComponent),
};
export const LayoutA0Feedback = Type.Object(LayoutA0FeedbackProperties);
export type LayoutA0Feedback = Static<typeof LayoutA0Feedback>;
