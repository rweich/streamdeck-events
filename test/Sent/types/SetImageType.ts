import { Static, Type } from '@sinclair/typebox';

export const SetImageSchema = Type.Object({
  context: Type.String(),
  event: Type.RegEx(/^setImage$/),
  payload: Type.Object({
    image: Type.String(),
    state: Type.Optional(Type.Number()),
    target: Type.Number({ maximum: 2, minimum: 0 }),
  }),
});

export type SetImageType = Static<typeof SetImageSchema>;
