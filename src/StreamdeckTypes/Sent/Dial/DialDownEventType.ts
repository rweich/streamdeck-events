import { Static, Type } from '@sinclair/typebox';

import { BaseDialPayloadProperties, BaseDialProperties } from './BaseDialType';

export const DialDownPayloadProperties = {
  ...BaseDialPayloadProperties,
};

export const DialDownEventProperties = {
  ...BaseDialProperties,
  event: Type.RegEx(/^dialDown$/),
  payload: Type.Object(DialDownPayloadProperties),
};

export const DialDownEventType = Type.Object(DialDownEventProperties);
export type DialDownEventType = Static<typeof DialDownEventType>;
