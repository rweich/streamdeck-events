import { Static, Type } from '@sinclair/typebox';

export const SetGlobalSettingsType = Type.Object({
  context: Type.String(),
  event: Type.RegEx(/^setGlobalSettings$/),
  payload: Type.Unknown(),
});
export type SetGlobalSettingsType = Static<typeof SetGlobalSettingsType>;
