import { Static, Type } from '@sinclair/typebox';

export const ApplicationDidTerminateType = Type.Object({
  event: Type.RegEx(/^applicationDidTerminate$/),
  payload: Type.Object({
    application: Type.String(),
  }),
});
export type ApplicationDidTerminateType = Static<typeof ApplicationDidTerminateType>;
