import { Static, Type } from '@sinclair/typebox';

import { BaseStateType } from './BaseStateType';

export const DidReceiveSettingsType = Type.Intersect([
  Type.Omit(BaseStateType, ['event']),
  Type.Object({
    event: Type.RegEx(/^didReceiveSettings$/),
  }),
]);
export type DidReceiveSettingsType = Static<typeof DidReceiveSettingsType>;
