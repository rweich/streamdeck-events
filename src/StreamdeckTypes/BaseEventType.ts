import { Static, Type } from '@sinclair/typebox';

export const BaseEventType = Type.Object({
  event: Type.String(),
});
export type BaseEventType = Static<typeof BaseEventType>;
