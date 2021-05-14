import { Static, Type } from '@sinclair/typebox';

import { BaseKeyType } from '@/StreamdeckTypes/Sent/BaseKeyType';

export const KeyUpEventType = Type.Intersect([
  Type.Omit(BaseKeyType, ['event']),
  Type.Object({
    event: Type.RegEx(/^keyUp$/),
  }),
]);
export type KeyUpEventType = Static<typeof KeyUpEventType>;
