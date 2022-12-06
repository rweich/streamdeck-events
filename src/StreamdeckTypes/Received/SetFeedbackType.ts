import {Static, Type} from "@sinclair/typebox";
import {BaseSetterProperties} from "@/StreamdeckTypes/Received/BaseSetterType";

export const SetFeedbackType = Type.Object({
  ...BaseSetterProperties,
  event: Type.RegEx(/^setFeedback$/),
  // FIXME: The exact types of payload are *highly* variable and depend on a lot of things. Actual definition of this
  //        will likely need to wait until Elgato releases official documentation.
  payload: Type.Unknown()
});
export type SetFeedbackType = Static<typeof SetFeedbackType>;
