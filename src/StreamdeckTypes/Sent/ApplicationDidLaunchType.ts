import { Static, Type } from '@sinclair/typebox';

export const ApplicationDidLaunchType = Type.Object({
  event: Type.RegEx(/^applicationDidLaunch$/),
  payload: Type.Object({
    application: Type.String(),
  }),
});
export type ApplicationDidLaunchType = Static<typeof ApplicationDidLaunchType>;
