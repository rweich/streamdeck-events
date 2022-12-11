import { Static, Type } from '@sinclair/typebox';

import { BaseVisibilityProperties } from '@/StreamdeckTypes/Sent/BaseVisibilityType';

export const WillDisappearType = Type.Object({
  ...BaseVisibilityProperties,
  event: Type.RegEx(/^willDisappear$/),
});
export type WillDisappearType = Static<typeof WillDisappearType>;
