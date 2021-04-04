import { Static, Type } from '@sinclair/typebox';

export const SetTitleSchema = Type.Object({
  context: Type.String(),
  event: Type.RegEx(/^setTitle$/),
  payload: Type.Object({
    state: Type.Optional(Type.Number()),
    target: Type.Number({ maximum: 2, minimum: 0 }),
    title: Type.String(),
  }),
});

export type SetTitleType = Static<typeof SetTitleSchema>;
