import { Static, Type } from '@sinclair/typebox';

export const OpenUrlType = Type.Object({
  event: Type.RegEx(/^openUrl$/),
  payload: Type.Object({
    url: Type.String(),
  }),
});
export type OpenUrlType = Static<typeof OpenUrlType>;
