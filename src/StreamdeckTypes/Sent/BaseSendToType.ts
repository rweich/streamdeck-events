import { Static, Type } from '@sinclair/typebox';

export const BaseSendToProperties = {
  action: Type.String(),
  context: Type.String(),
  event: Type.RegEx(/^sendToPlugin|sendToPropertyInspector$/),
  payload: Type.Record(Type.String(), Type.Unknown()),
};

export const BaseSendToType = Type.Object(BaseSendToProperties);
export type BaseSendToType = Static<typeof BaseSendToType>;
