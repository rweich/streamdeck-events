import { Static, Type } from '@sinclair/typebox';

import { WrappedBarFeedbackComponent } from '@/StreamdeckTypes/Received/Feedback/Components/BarFeedbackComponent';
import { WrappedTextFeedbackComponent } from '@/StreamdeckTypes/Received/Feedback/Components/TextFeedbackComponent';
import { IconLayoutFeedbackProperties } from '@/StreamdeckTypes/Received/Feedback/LayoutFeedback/BaseLayoutFeedback';

export const LayoutB1FeedbackProperties = {
  ...IconLayoutFeedbackProperties,

  indicator: Type.Optional(WrappedBarFeedbackComponent),
  value: Type.Optional(WrappedTextFeedbackComponent),
};
export const LayoutB1Feedback = Type.Object(LayoutB1FeedbackProperties);
export type LayoutB1Feedback = Static<typeof LayoutB1Feedback>;
