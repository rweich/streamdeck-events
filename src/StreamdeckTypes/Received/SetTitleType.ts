import { Static, Type } from '@sinclair/typebox';

import { BaseSetterPayloadType, BaseSetterProperties } from '@/StreamdeckTypes/Received/BaseSetterType';

export const SetTitleType = Type.Object({
  ...BaseSetterProperties,
  event: Type.RegEx(/^setTitle$/),
  payload: Type.Intersect([
    BaseSetterPayloadType,
    Type.Object({
      title: Type.String(),
    }),
  ]),
});
export type SetTitleType = Static<typeof SetTitleType>;
