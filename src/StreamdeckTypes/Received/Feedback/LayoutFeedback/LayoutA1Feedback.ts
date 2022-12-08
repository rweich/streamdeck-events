import { Static, Type } from '@sinclair/typebox';

import { WrappedTextFeedbackComponent } from '@/StreamdeckTypes/Received/Feedback/Components/TextFeedbackComponent';
import { IconLayoutFeedbackProperties } from '@/StreamdeckTypes/Received/Feedback/LayoutFeedback/BaseLayoutFeedback';

export const LayoutA1FeedbackProperties = {
  ...IconLayoutFeedbackProperties,

  value: Type.Optional(WrappedTextFeedbackComponent),
};
export const LayoutA1Feedback = Type.Object(LayoutA1FeedbackProperties);
export type LayoutA1Feedback = Static<typeof LayoutA1Feedback>;
