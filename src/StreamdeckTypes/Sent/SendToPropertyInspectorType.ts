import { Static, Type } from '@sinclair/typebox';

import { BaseSendToType } from '@/StreamdeckTypes/Sent/BaseSendToType';

export const SendToPropertyInspectorType = Type.Intersect([
  Type.Omit(BaseSendToType, ['event']),
  Type.Object({
    event: Type.RegEx(/^sendToPropertyInspector$/),
  }),
]);
export type SendToPropertyInspectorType = Static<typeof SendToPropertyInspectorType>;
