import { Static, Type } from '@sinclair/typebox';

export const DeviceDidDisconnectType = Type.Object({
  device: Type.String(),
  event: Type.RegEx(/^deviceDidDisconnect$/),
});
export type DeviceDidDisconnectType = Static<typeof DeviceDidDisconnectType>;
