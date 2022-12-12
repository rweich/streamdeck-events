import { Static, Type } from '@sinclair/typebox';

import { BaseSetterProperties } from '@/StreamdeckTypes/Received/BaseSetterType';
import { LayoutFeedbackMapping } from '@/StreamdeckTypes/Received/Feedback/LayoutFeedback';

export const SetFeedbackLayoutType = Type.Object({
  ...BaseSetterProperties,
  event: Type.RegEx(/^setFeedbackLayout$/),
  payload: Type.Object({
    layout: Type.KeyOf(Type.Object(LayoutFeedbackMapping)),
  }),
});
export type SetFeedbackLayoutType = Static<typeof SetFeedbackLayoutType>;
