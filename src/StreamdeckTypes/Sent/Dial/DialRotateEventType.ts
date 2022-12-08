import { Static, Type } from '@sinclair/typebox';

import { BaseEncoderPayloadProperties, BaseEncoderProperties } from './BaseEncoderType';

export const DialRotatePayloadProperties = {
  ...BaseEncoderPayloadProperties,
  ticks: Type.Number(),
};

export const DialRotateEventProperties = {
  ...BaseEncoderProperties,
  event: Type.RegEx(/^dialRotate$/),
  payload: Type.Object(DialRotatePayloadProperties),
};

export const DialRotateEventType = Type.Object(DialRotateEventProperties);
export type DialRotateEventType = Static<typeof DialRotateEventType>;
