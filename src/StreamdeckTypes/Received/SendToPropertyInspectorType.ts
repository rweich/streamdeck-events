import { Static, Type } from '@sinclair/typebox';

export const SendToPropertyInspectorType = Type.Object({
  action: Type.String(),
  context: Type.String(),
  event: Type.RegEx(/^sendToPropertyInspector$/),
  payload: Type.Any(),
});
export type SendToPropertyInspectorType = Static<typeof SendToPropertyInspectorType>;
