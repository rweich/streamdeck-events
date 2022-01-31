import { Static, Type } from '@sinclair/typebox';

import { BaseSetterPayloadType, BaseSetterType } from '@/StreamdeckTypes/Received/BaseSetterType';

export const SetImageType = Type.Intersect([
  Type.Omit(BaseSetterType, ['event', 'payload']),
  Type.Object({
    event: Type.RegEx(/^setImage$/),
    payload: Type.Intersect([
      BaseSetterPayloadType,
      Type.Object({
        image: Type.String(),
      }),
    ]),
  }),
]);
export type SetImageType = Static<typeof SetImageType>;
