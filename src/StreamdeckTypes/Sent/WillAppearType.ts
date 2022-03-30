import { Static, Type } from '@sinclair/typebox';

import { BaseStateProperties } from '@/StreamdeckTypes/Sent/BaseStateType';

export const WillAppearType = Type.Object({
  ...BaseStateProperties,
  event: Type.RegEx(/^willAppear$/),
});
export type WillAppearType = Static<typeof WillAppearType>;
