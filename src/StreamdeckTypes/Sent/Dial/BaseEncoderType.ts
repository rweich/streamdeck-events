import { Static, Type } from "@sinclair/typebox";
import {BaseDialPayloadProperties, BaseDialProperties} from "@/StreamdeckTypes/Sent/Dial/BaseDialType";

export const BaseEncoderPayloadProperties = {
  ...BaseDialPayloadProperties,
  pressed: Type.Boolean()
};

export const BaseEncoderProperties = {
  ...BaseDialProperties,
  event: Type.RegEx(/^dialPress|dialRotate$/),
  payload: Type.Object(BaseEncoderPayloadProperties)
};

export const BaseEncoderType = Type.Object(BaseEncoderProperties);
export type BaseEncoderType = Static<typeof BaseEncoderType>;
