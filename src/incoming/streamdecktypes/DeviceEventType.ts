import { DeviceType } from '../plugin/DeviceType';
import { Type } from '@sinclair/typebox';

export const DeviceDidDisconnectType = Type.Object({
  device: Type.String(),
  event: Type.RegEx(/^deviceDidDisconnect$/),
});

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
