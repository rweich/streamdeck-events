import { Static, Type } from '@sinclair/typebox';

export const ShowAlertType = Type.Object({
  context: Type.String(),
  event: Type.RegEx(/^showAlert$/),
});
export type ShowAlertType = Static<typeof ShowAlertType>;
