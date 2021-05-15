import { Static, Type } from '@sinclair/typebox';

export const BaseSetterPayloadType = Type.Object({
  state: Type.Optional(Type.Number()),
  target: Type.Number({ maximum: 2, minimum: 0 }),
});

export const BaseSetterType = Type.Object({
  context: Type.String(),
  event: Type.RegEx(/^setImage|setTitle$/),
  payload: BaseSetterPayloadType,
});
export type BaseSetterType = Static<typeof BaseSetterType>;
