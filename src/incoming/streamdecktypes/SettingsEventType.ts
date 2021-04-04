import { StateEventType } from './StateEventType';
import { Type } from '@sinclair/typebox';

export const DidReceiveSettingsType = Type.Intersect([
  Type.Omit(StateEventType, ['event']),
  Type.Object({
    event: Type.RegEx(/^didReceiveSettings$/),
  }),
]);

export const DidReceiveGlobalSettingsType = Type.Object({
  event: Type.RegEx(/^didReceiveGlobalSettings$/),
  payload: Type.Object({
    settings: Type.Any(),
  }),
});
