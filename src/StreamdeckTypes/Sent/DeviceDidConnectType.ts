import { Static, Type } from '@sinclair/typebox';

import { DeviceType } from '@/Events/Received/Plugin/DeviceType';

export const DeviceDidConnectType = Type.Object({
  device: Type.String(),
  deviceInfo: Type.Object({
    name: Type.String(),
    size: Type.Object({
      columns: Type.Number(),
      rows: Type.Number(),
    }),
    type: Type.Enum(DeviceType),
  }),
  event: Type.RegEx(/^deviceDidConnect$/),
});
export type DeviceDidConnectType = Static<typeof DeviceDidConnectType>;
