import { Static, Type } from '@sinclair/typebox';

import { PixmapFeedbackComponent } from '@/StreamdeckTypes/Received/Feedback/Components';
import { LayoutX0FeedbackProperties } from '@/StreamdeckTypes/Received/Feedback/LayoutFeedback/LayoutX0Feedback';

export const LayoutX1FeedbackProperties = {
  ...LayoutX0FeedbackProperties,

  'dial-press': Type.Optional(PixmapFeedbackComponent),
};
export const LayoutX1Feedback = Type.Object(LayoutX1FeedbackProperties);
export type LayoutX1Feedback = Static<typeof LayoutX1Feedback>;
