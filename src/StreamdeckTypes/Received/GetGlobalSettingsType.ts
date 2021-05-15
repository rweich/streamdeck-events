import { Static, Type } from '@sinclair/typebox';

export const GetGlobalSettingsType = Type.Object({
  context: Type.String(),
  event: Type.RegEx(/^getGlobalSettings$/),
});
export type GetGlobalSettingsType = Static<typeof GetGlobalSettingsType>;
