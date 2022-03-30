import { Static, Type } from '@sinclair/typebox';

import { BaseSetterPayloadType, BaseSetterProperties } from '@/StreamdeckTypes/Received/BaseSetterType';

export const SetImageType = Type.Object({
  ...BaseSetterProperties,
  event: Type.RegEx(/^setImage$/),
  payload: Type.Intersect([
    BaseSetterPayloadType,
    Type.Object({
      image: Type.String(),
    }),
  ]),
});
export type SetImageType = Static<typeof SetImageType>;
