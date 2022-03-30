import { Static, Type } from '@sinclair/typebox';

import { BaseSendToProperties } from '@/StreamdeckTypes/Sent/BaseSendToType';

export const SendToPluginType = Type.Object({
  ...BaseSendToProperties,
  event: Type.RegEx(/^sendToPlugin$/),
});
export type SendToPluginType = Static<typeof SendToPluginType>;
