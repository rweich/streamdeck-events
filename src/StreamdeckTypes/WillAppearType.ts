import { Static, Type } from '@sinclair/typebox';

import { BaseStateType } from '@/StreamdeckTypes/BaseStateType';

export const WillAppearType = Type.Intersect([
  Type.Omit(BaseStateType, ['event']),
  Type.Object({
    event: Type.RegEx(/^willAppear$/),
  }),
]);
export type WillAppearType = Static<typeof WillAppearType>;
