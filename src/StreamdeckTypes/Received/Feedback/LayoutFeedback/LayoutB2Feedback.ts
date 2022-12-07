import { Static, Type } from '@sinclair/typebox';

import { GrooveBarFeedbackComponent } from '@/StreamdeckTypes/Received/Feedback/Components';
import { LayoutB1FeedbackProperties } from '@/StreamdeckTypes/Received/Feedback/LayoutFeedback/LayoutB1Feedback';

export const LayoutB2FeedbackProperties = {
  ...LayoutB1FeedbackProperties,

  indicator: Type.Optional(GrooveBarFeedbackComponent),
};
export const LayoutB2Feedback = Type.Object(LayoutB2FeedbackProperties);
export type LayoutB2Feedback = Static<typeof LayoutB2Feedback>;
