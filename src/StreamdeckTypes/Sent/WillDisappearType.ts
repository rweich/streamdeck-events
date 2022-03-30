import { Static, Type } from '@sinclair/typebox';

import { BaseStateProperties } from '@/StreamdeckTypes/Sent/BaseStateType';

export const WillDisappearType = Type.Object({
  ...BaseStateProperties,
  event: Type.RegEx(/^willDisappear$/),
});
export type WillDisappearType = Static<typeof WillDisappearType>;
