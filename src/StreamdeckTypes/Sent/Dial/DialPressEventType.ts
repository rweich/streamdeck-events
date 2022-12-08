import { Static, Type } from '@sinclair/typebox';

import { BaseEncoderPayloadProperties, BaseEncoderProperties } from './BaseEncoderType';

export const DialPressPayloadProperties = {
  ...BaseEncoderPayloadProperties,
};

export const DialPressEventProperties = {
  ...BaseEncoderProperties,
  event: Type.RegEx(/^dialPress$/),
  payload: Type.Object(DialPressPayloadProperties),
};

export const DialPressEventType = Type.Object(DialPressEventProperties);
export type DialPressEventType = Static<typeof DialPressEventType>;
