import { Static, Type } from '@sinclair/typebox';

export const SystemDidWakeUpType = Type.Object({
  event: Type.RegEx(/^systemDidWakeUp$/),
});
export type SystemDidWakeUpType = Static<typeof SystemDidWakeUpType>;
