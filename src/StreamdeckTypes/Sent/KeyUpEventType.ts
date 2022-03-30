import { Static, Type } from '@sinclair/typebox';

import { BaseKeyProperties } from '@/StreamdeckTypes/Sent/BaseKeyType';

export const KeyUpEventType = Type.Object({
  ...BaseKeyProperties,
  event: Type.RegEx(/^keyUp$/),
});
export type KeyUpEventType = Static<typeof KeyUpEventType>;
