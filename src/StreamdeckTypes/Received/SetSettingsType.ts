import { Static, Type } from '@sinclair/typebox';

export const SetSettingsType = Type.Object({
  context: Type.String(),
  event: Type.RegEx(/^setSettings$/),
  payload: Type.Unknown(),
});
export type SetSettingsType = Static<typeof SetSettingsType>;
