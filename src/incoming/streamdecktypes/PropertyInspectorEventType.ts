import { Type } from '@sinclair/typebox';

export const PropertyInspectorEventType = Type.Object({
  action: Type.String(),
  context: Type.String(),
  device: Type.String(),
  event: Type.RegEx(/^propertyInspectorDidAppear|propertyInspectorDidDisappear$/),
});

export const PropertyInspectorDidAppearEventType = Type.Intersect([
  Type.Omit(PropertyInspectorEventType, ['event']),
  Type.Object({
    event: Type.RegEx(/^propertyInspectorDidAppear$/),
  }),
]);

export const PropertyInspectorDidDisppearEventType = Type.Intersect([
  Type.Omit(PropertyInspectorEventType, ['event']),
  Type.Object({
    event: Type.RegEx(/^propertyInspectorDidDisappear$/),
  }),
]);
