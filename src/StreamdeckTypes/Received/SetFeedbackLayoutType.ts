import { Static, Type } from '@sinclair/typebox';

import { BaseSetterProperties } from '@/StreamdeckTypes/Received/BaseSetterType';

export const SetFeedbackLayoutType = Type.Object({
  ...BaseSetterProperties,
  event: Type.RegEx(/^setFeedbackLayout$/),
  payload: Type.Object({
    layout: Type.RegEx(/^\$(A[01]|B[12]|C1|X[0-2])$/),
  }),
});
export type SetFeedbackLayoutType = Static<typeof SetFeedbackLayoutType>;
