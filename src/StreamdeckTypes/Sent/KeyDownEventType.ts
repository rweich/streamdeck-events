import { Static, Type } from '@sinclair/typebox';

import { BaseKeyType } from '@/StreamdeckTypes/Sent/BaseKeyType';

export const KeyDownEventType = Type.Intersect([
  Type.Omit(BaseKeyType, ['event']),
  Type.Object({
    event: Type.RegEx(/^keyDown$/),
  }),
]);
export type KeyDownEventType = Static<typeof KeyDownEventType>;
