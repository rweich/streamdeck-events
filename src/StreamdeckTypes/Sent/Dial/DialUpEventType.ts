import { Static, Type } from '@sinclair/typebox';

import { BaseDialPayloadProperties, BaseDialProperties } from './BaseDialType';

export const DialUpPayloadProperties = {
  ...BaseDialPayloadProperties,
};

export const DialUpEventProperties = {
  ...BaseDialProperties,
  event: Type.RegEx(/^dialUp$/),
  payload: Type.Object(DialUpPayloadProperties),
};

export const DialUpEventType = Type.Object(DialUpEventProperties);
export type DialUpEventType = Static<typeof DialUpEventType>;
