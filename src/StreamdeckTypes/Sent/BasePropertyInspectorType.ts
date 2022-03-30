import { Type } from '@sinclair/typebox';

export const BasePropertyInspectorProperties = {
  action: Type.String(),
  context: Type.String(),
  device: Type.String(),
  event: Type.RegEx(/^propertyInspectorDidAppear|propertyInspectorDidDisappear$/),
};

export const BasePropertyInspectorType = Type.Object(BasePropertyInspectorProperties);
