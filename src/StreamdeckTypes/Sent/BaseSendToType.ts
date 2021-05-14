import { Static, Type } from '@sinclair/typebox';

export const BaseSendToType = Type.Object({
  action: Type.String(),
  context: Type.String(),
  event: Type.RegEx(/^sendToPlugin|sendToPropertyInspector$/),
  payload: Type.Dict(Type.Any()),
});
export type BaseSendToType = Static<typeof BaseSendToType>;
