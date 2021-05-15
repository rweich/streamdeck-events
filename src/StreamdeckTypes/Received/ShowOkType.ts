import { Static, Type } from '@sinclair/typebox';

export const ShowOkType = Type.Object({
  context: Type.String(),
  event: Type.RegEx(/^showOk$/),
});
export type ShowOkType = Static<typeof ShowOkType>;
