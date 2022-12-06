import { Static, Type } from '@sinclair/typebox';
import {BaseDialPayloadProperties, BaseDialProperties} from "./BaseDialType";

export const TouchTapPayloadProperties = {
  ...BaseDialPayloadProperties,
  hold: Type.Boolean(),
  tapPos: Type.Array(Type.Number(), {minItems: 2, maxItems: 2})
}

export const TouchTapEventProperties = {
  ...BaseDialProperties,
  event: Type.RegEx(/^touchTap$/),
  payload: Type.Object(TouchTapPayloadProperties)
};

export const TouchTapEventType = Type.Object(TouchTapEventProperties)
export type TouchTapEventType = Static<typeof TouchTapEventType>;
