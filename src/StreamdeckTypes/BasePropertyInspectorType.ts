import { Type } from '@sinclair/typebox';

export const BasePropertyInspectorType = Type.Object({
  action: Type.String(),
  context: Type.String(),
  device: Type.String(),
  event: Type.RegEx(/^propertyInspectorDidAppear|propertyInspectorDidDisappear$/),
});
