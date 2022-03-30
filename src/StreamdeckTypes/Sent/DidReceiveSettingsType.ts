import { Static, Type } from '@sinclair/typebox';

import { BaseStateProperties } from './BaseStateType';

export const DidReceiveSettingsType = Type.Object({
  ...BaseStateProperties,
  event: Type.RegEx(/^didReceiveSettings$/),
});
export type DidReceiveSettingsType = Static<typeof DidReceiveSettingsType>;
