import { Static, Type } from '@sinclair/typebox';

import { PixmapFeedbackComponent } from '@/StreamdeckTypes/Received/Feedback/Components';
import { LayoutX2FeedbackProperties } from '@/StreamdeckTypes/Received/Feedback/LayoutFeedback/LayoutX2Feedback';

export const LayoutX0FeedbackProperties = {
  ...LayoutX2FeedbackProperties,

  'arrow-ccw': Type.Optional(PixmapFeedbackComponent),
  'arrow-cw': Type.Optional(PixmapFeedbackComponent),
};
export const LayoutX0Feedback = Type.Object(LayoutX0FeedbackProperties);
export type LayoutX0Feedback = Static<typeof LayoutX0Feedback>;
