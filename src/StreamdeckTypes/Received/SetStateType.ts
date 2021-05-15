import { Static, Type } from '@sinclair/typebox';

export const SetStateType = Type.Object({
  context: Type.String(),
  event: Type.RegEx(/^setState$/),
  payload: Type.Object({
    state: Type.Number(),
  }),
});
export type SetStateType = Static<typeof SetStateType>;
