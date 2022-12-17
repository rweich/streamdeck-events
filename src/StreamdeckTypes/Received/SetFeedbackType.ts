import { Static, Type } from '@sinclair/typebox';

import { BaseSetterProperties } from '@/StreamdeckTypes/Received/BaseSetterType';
import { GenericLayoutFeedback } from '@/StreamdeckTypes/Received/Feedback/LayoutFeedback';

export const SetFeedbackType = Type.Object({
  ...BaseSetterProperties,
  event: Type.RegEx(/^setFeedback$/),
  payload: GenericLayoutFeedback,
});
export type SetFeedbackType = Static<typeof SetFeedbackType>;
