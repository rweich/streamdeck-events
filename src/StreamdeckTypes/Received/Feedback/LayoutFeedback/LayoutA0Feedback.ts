import { Static, Type } from '@sinclair/typebox';

import { PixmapFeedbackComponent } from '@/StreamdeckTypes/Received/Feedback/Components';
import { BaseLayoutFeedbackProperties } from '@/StreamdeckTypes/Received/Feedback/LayoutFeedback/BaseLayoutFeedback';

export const LayoutA0FeedbackProperties = {
  ...BaseLayoutFeedbackProperties,

  canvas: Type.Optional(PixmapFeedbackComponent),
  'full-canvas': Type.Optional(PixmapFeedbackComponent),
};
export const LayoutA0Feedback = Type.Object(LayoutA0FeedbackProperties);
export type LayoutA0Feedback = Static<typeof LayoutA0Feedback>;
