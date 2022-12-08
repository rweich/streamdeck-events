import { Static, Type } from '@sinclair/typebox';

import { WrappedPixmapFeedbackComponent } from '@/StreamdeckTypes/Received/Feedback/Components/PixmapFeedbackComponent';
import { LayoutX0FeedbackProperties } from '@/StreamdeckTypes/Received/Feedback/LayoutFeedback/LayoutX0Feedback';

export const LayoutX1FeedbackProperties = {
  ...LayoutX0FeedbackProperties,

  'dial-press': Type.Optional(WrappedPixmapFeedbackComponent),
};
export const LayoutX1Feedback = Type.Object(LayoutX1FeedbackProperties);
export type LayoutX1Feedback = Static<typeof LayoutX1Feedback>;
