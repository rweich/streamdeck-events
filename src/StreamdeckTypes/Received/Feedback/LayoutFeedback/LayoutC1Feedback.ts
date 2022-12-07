import { Static, Type } from '@sinclair/typebox';

import { BarFeedbackComponent, PixmapFeedbackComponent } from '@/StreamdeckTypes/Received/Feedback/Components';
import { BaseLayoutFeedbackProperties } from '@/StreamdeckTypes/Received/Feedback/LayoutFeedback/BaseLayoutFeedback';

export const LayoutC1FeedbackProperties = {
  ...BaseLayoutFeedbackProperties,

  icon1: Type.Optional(PixmapFeedbackComponent),
  icon2: Type.Optional(PixmapFeedbackComponent),
  indicator1: Type.Optional(BarFeedbackComponent),
  indicator2: Type.Optional(BarFeedbackComponent),
};
export const LayoutC1Feedback = Type.Object(LayoutC1FeedbackProperties);
export type LayoutC1Feedback = Static<typeof LayoutC1Feedback>;
