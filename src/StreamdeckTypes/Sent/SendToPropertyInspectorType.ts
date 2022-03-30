import { Static, Type } from '@sinclair/typebox';

import { BaseSendToProperties } from '@/StreamdeckTypes/Sent/BaseSendToType';

export const SendToPropertyInspectorType = Type.Object({
  ...BaseSendToProperties,
  event: Type.RegEx(/^sendToPropertyInspector$/),
});
export type SendToPropertyInspectorType = Static<typeof SendToPropertyInspectorType>;
