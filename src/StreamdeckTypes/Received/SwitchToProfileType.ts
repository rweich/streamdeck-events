import { Static, Type } from '@sinclair/typebox';

export const SwitchToProfileType = Type.Object({
  context: Type.String(),
  device: Type.String(),
  event: Type.RegEx(/^switchToProfile$/),
  payload: Type.Object({
    profile: Type.String(),
  }),
});
export type SwitchToProfileType = Static<typeof SwitchToProfileType>;
