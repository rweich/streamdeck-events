import { Static, Type } from '@sinclair/typebox';

export const DidReceiveGlobalSettingsType = Type.Object({
  event: Type.RegEx(/^didReceiveGlobalSettings$/),
  payload: Type.Object({
    settings: Type.Any(),
  }),
});
export type DidReceiveGlobalSettingsType = Static<typeof DidReceiveGlobalSettingsType>;
