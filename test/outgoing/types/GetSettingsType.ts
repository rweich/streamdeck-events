import { Static, Type } from '@sinclair/typebox';

export const GetSettingsSchema = Type.Object({
  context: Type.String(),
  event: Type.RegEx(/^getSettings$/),
});

export type GetSettingsType = Static<typeof GetSettingsSchema>;
