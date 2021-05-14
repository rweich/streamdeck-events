import { Static, Type } from '@sinclair/typebox';

import { BaseStateType } from '@/StreamdeckTypes/BaseStateType';

export const WillDisappearType = Type.Intersect([
  Type.Omit(BaseStateType, ['event']),
  Type.Object({
    event: Type.RegEx(/^willDisappear$/),
  }),
]);
export type WillDisappearType = Static<typeof WillDisappearType>;
