import { Static, Type } from '@sinclair/typebox';

import { BaseSendToType } from '@/StreamdeckTypes/BaseSendToType';

export const SendToPluginType = Type.Intersect([
  Type.Omit(BaseSendToType, ['event']),
  Type.Object({
    event: Type.RegEx(/^sendToPlugin$/),
  }),
]);
export type SendToPluginType = Static<typeof SendToPluginType>;
