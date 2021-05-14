import { Static, Type } from '@sinclair/typebox';

export const SetSettingsSchema = Type.Object({
  context: Type.String(),
  event: Type.RegEx(/^setSettings$/),
  payload: Type.Any(),
});

export type SetSettingsType = Static<typeof SetSettingsSchema>;
