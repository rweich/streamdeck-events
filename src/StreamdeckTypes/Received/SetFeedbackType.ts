import { Static, Type } from '@sinclair/typebox';

import { BaseSetterProperties } from '@/StreamdeckTypes/Received/BaseSetterType';
import {
  LayoutA0Feedback,
  LayoutA1Feedback,
  LayoutB1Feedback,
  LayoutB2Feedback,
  LayoutC1Feedback,
  LayoutX0Feedback,
  LayoutX1Feedback,
  LayoutX2Feedback,
} from '@/StreamdeckTypes/Received/Feedback/LayoutFeedback';

export const SetFeedbackType = Type.Object({
  ...BaseSetterProperties,
  event: Type.RegEx(/^setFeedback$/),
  // FIXME: The exact types of payload are *highly* variable and depend on a lot of things. Actual definition of this
  //        will likely need to wait until Elgato releases official documentation.
  payload: Type.Union([
    LayoutA0Feedback,
    LayoutA1Feedback,
    LayoutB1Feedback,
    LayoutB2Feedback,
    LayoutC1Feedback,
    LayoutX0Feedback,
    LayoutX1Feedback,
    LayoutX2Feedback,
  ]),
});
export type SetFeedbackType = Static<typeof SetFeedbackType>;
