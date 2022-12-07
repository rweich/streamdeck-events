import { Static, Type } from '@sinclair/typebox';

import { BarFeedbackComponent, TextFeedbackComponent } from '@/StreamdeckTypes/Received/Feedback/Components';
import { IconLayoutFeedbackProperties } from '@/StreamdeckTypes/Received/Feedback/LayoutFeedback/BaseLayoutFeedback';

export const LayoutB1FeedbackProperties = {
  ...IconLayoutFeedbackProperties,

  indicator: Type.Optional(BarFeedbackComponent),
  value: Type.Optional(Type.Union([TextFeedbackComponent, Type.String(), Type.Number()])),
};
export const LayoutB1Feedback = Type.Object(LayoutB1FeedbackProperties);
export type LayoutB1Feedback = Static<typeof LayoutB1Feedback>;
