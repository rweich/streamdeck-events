import { Static, Type } from '@sinclair/typebox';

import { BaseSetterProperties } from '@/StreamdeckTypes/Received/BaseSetterType';

export const SetFeedbackLayoutType = Type.Object({
  ...BaseSetterProperties,
  event: Type.RegEx(/^setFeedbackLayout$/),
  payload: Type.Object({
    layout: Type.String(),
  }),
});
export type SetFeedbackLayoutType = Static<typeof SetFeedbackLayoutType>;
