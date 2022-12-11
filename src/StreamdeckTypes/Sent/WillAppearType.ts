import { Static, Type } from '@sinclair/typebox';

import { BaseVisibilityProperties } from '@/StreamdeckTypes/Sent/BaseVisibilityType';

export const WillAppearType = Type.Object({
  ...BaseVisibilityProperties,
  event: Type.RegEx(/^willAppear$/),
});
export type WillAppearType = Static<typeof WillAppearType>;
