import { Static, Type } from '@sinclair/typebox';

import { WrappedBarFeedbackComponent } from '@/StreamdeckTypes/Received/Feedback/Components/BarFeedbackComponent';
import { WrappedPixmapFeedbackComponent } from '@/StreamdeckTypes/Received/Feedback/Components/PixmapFeedbackComponent';
import { BaseLayoutFeedbackProperties } from '@/StreamdeckTypes/Received/Feedback/LayoutFeedback/BaseLayoutFeedback';

export const LayoutC1FeedbackProperties = {
  ...BaseLayoutFeedbackProperties,

  icon1: Type.Optional(WrappedPixmapFeedbackComponent),
  icon2: Type.Optional(WrappedPixmapFeedbackComponent),
  indicator1: Type.Optional(WrappedBarFeedbackComponent),
  indicator2: Type.Optional(WrappedBarFeedbackComponent),
};
export const LayoutC1Feedback = Type.Object(LayoutC1FeedbackProperties);
export type LayoutC1Feedback = Static<typeof LayoutC1Feedback>;
