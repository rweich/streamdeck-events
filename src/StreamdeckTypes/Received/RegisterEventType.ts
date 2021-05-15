import { Static, Type } from '@sinclair/typebox';

export const RegisterEventType = Type.Object({
  event: Type.RegEx(/[Rr]egister/),
  uuid: Type.String(),
});
export type RegisterEventType = Static<typeof RegisterEventType>;
