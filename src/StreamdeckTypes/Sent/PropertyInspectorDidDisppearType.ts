import { Static, Type } from '@sinclair/typebox';

import { BasePropertyInspectorProperties } from '@/StreamdeckTypes/Sent/BasePropertyInspectorType';

export const PropertyInspectorDidDisppearType = Type.Object({
  ...BasePropertyInspectorProperties,
  event: Type.RegEx(/^propertyInspectorDidDisappear$/),
});
export type PropertyInspectorDidDisppearType = Static<typeof PropertyInspectorDidDisppearType>;
