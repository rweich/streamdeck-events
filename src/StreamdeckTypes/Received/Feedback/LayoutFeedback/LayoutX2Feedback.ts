import { Static, Type } from '@sinclair/typebox';

import { WrappedPixmapFeedbackComponent } from '@/StreamdeckTypes/Received/Feedback/Components/PixmapFeedbackComponent';
import { IconLayoutFeedbackProperties } from '@/StreamdeckTypes/Received/Feedback/LayoutFeedback/BaseLayoutFeedback';

export const LayoutX2FeedbackProperties = {
  ...IconLayoutFeedbackProperties,

  shutter: Type.Optional(WrappedPixmapFeedbackComponent),
};
export const LayoutX2Feedback = Type.Object(LayoutX2FeedbackProperties);
export type LayoutX2Feedback = Static<typeof LayoutX2Feedback>;
