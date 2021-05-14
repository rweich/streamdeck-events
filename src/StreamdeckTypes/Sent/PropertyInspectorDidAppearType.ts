import { Static, Type } from '@sinclair/typebox';

import { BasePropertyInspectorType } from '@/StreamdeckTypes/Sent/BasePropertyInspectorType';

export const PropertyInspectorDidAppearType = Type.Intersect([
  Type.Omit(BasePropertyInspectorType, ['event']),
  Type.Object({
    event: Type.RegEx(/^propertyInspectorDidAppear$/),
  }),
]);
export type PropertyInspectorDidAppearType = Static<typeof PropertyInspectorDidAppearType>;
