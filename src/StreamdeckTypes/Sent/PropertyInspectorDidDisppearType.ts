import { Static, Type } from '@sinclair/typebox';

import { BasePropertyInspectorType } from '@/StreamdeckTypes/Sent/BasePropertyInspectorType';

export const PropertyInspectorDidDisppearType = Type.Intersect([
  Type.Omit(BasePropertyInspectorType, ['event']),
  Type.Object({
    event: Type.RegEx(/^propertyInspectorDidDisappear$/),
  }),
]);
export type PropertyInspectorDidDisppearType = Static<typeof PropertyInspectorDidDisppearType>;
