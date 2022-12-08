import { Static, Type } from '@sinclair/typebox';

import { WrappedPixmapFeedbackComponent } from '@/StreamdeckTypes/Received/Feedback/Components/PixmapFeedbackComponent';
import { LayoutX2FeedbackProperties } from '@/StreamdeckTypes/Received/Feedback/LayoutFeedback/LayoutX2Feedback';

export const LayoutX0FeedbackProperties = {
  ...LayoutX2FeedbackProperties,

  'arrow-ccw': Type.Optional(WrappedPixmapFeedbackComponent),
  'arrow-cw': Type.Optional(WrappedPixmapFeedbackComponent),
};
export const LayoutX0Feedback = Type.Object(LayoutX0FeedbackProperties);
export type LayoutX0Feedback = Static<typeof LayoutX0Feedback>;
