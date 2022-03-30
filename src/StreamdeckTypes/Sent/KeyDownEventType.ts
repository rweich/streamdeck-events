import { Static, Type } from '@sinclair/typebox';

import { BaseKeyProperties } from '@/StreamdeckTypes/Sent/BaseKeyType';

export const KeyDownEventType = Type.Object({
  ...BaseKeyProperties,
  event: Type.RegEx(/^keyDown$/),
});
export type KeyDownEventType = Static<typeof KeyDownEventType>;
