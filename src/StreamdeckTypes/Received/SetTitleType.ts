import { BaseSetterPayloadType, BaseSetterType } from '@/StreamdeckTypes/Received/BaseSetterType';
import { Static, Type } from '@sinclair/typebox';

export const SetTitleType = Type.Intersect([
  Type.Omit(BaseSetterType, ['event', 'payload']),
  Type.Object({
    event: Type.RegEx(/^setTitle$/),
    payload: Type.Intersect([
      BaseSetterPayloadType,
      Type.Object({
        title: Type.String(),
      }),
    ]),
  }),
]);
export type SetTitleType = Static<typeof SetTitleType>;
