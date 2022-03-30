import { Static, Type } from '@sinclair/typebox';

import { BasePropertyInspectorProperties } from '@/StreamdeckTypes/Sent/BasePropertyInspectorType';

export const PropertyInspectorDidAppearType = Type.Object({
  ...BasePropertyInspectorProperties,
  event: Type.RegEx(/^propertyInspectorDidAppear$/),
});
export type PropertyInspectorDidAppearType = Static<typeof PropertyInspectorDidAppearType>;
