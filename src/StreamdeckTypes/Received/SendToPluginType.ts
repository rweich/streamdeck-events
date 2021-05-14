import { Static, Type } from '@sinclair/typebox';

export const SendToPluginType = Type.Object({
  action: Type.String(),
  context: Type.String(),
  event: Type.RegEx(/^sendToPlugin$/),
  payload: Type.Any(),
});
export type SendToPluginType = Static<typeof SendToPluginType>;
