import { Static, Type } from '@sinclair/typebox';

export const SendToPropertyInspectorSchema = Type.Object({
  action: Type.String(),
  context: Type.String(),
  event: Type.RegEx(/^sendToPropertyInspector$/),
  payload: Type.Any(),
});

export type SendToPropertyInspectorType = Static<typeof SendToPropertyInspectorSchema>;
