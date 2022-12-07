import { Static, Type } from '@sinclair/typebox';

import { TextFeedbackComponent } from '@/StreamdeckTypes/Received/Feedback/Components';
import { IconLayoutFeedbackProperties } from '@/StreamdeckTypes/Received/Feedback/LayoutFeedback/BaseLayoutFeedback';

export const LayoutA1FeedbackProperties = {
  ...IconLayoutFeedbackProperties,

  value: Type.Optional(Type.Union([TextFeedbackComponent, Type.String(), Type.Number()])),
};
export const LayoutA1Feedback = Type.Object(LayoutA1FeedbackProperties);
export type LayoutA1Feedback = Static<typeof LayoutA1Feedback>;
