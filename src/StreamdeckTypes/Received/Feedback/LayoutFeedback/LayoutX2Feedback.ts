import { Static, Type } from '@sinclair/typebox';

import { PixmapFeedbackComponent } from '@/StreamdeckTypes/Received/Feedback/Components';
import { IconLayoutFeedbackProperties } from '@/StreamdeckTypes/Received/Feedback/LayoutFeedback/BaseLayoutFeedback';

export const LayoutX2FeedbackProperties = {
  ...IconLayoutFeedbackProperties,

  shutter: Type.Optional(PixmapFeedbackComponent),
};
export const LayoutX2Feedback = Type.Object(LayoutX2FeedbackProperties);
export type LayoutX2Feedback = Static<typeof LayoutX2Feedback>;
