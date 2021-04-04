import { Type } from '@sinclair/typebox';

export const SendToEventType = Type.Object({
  action: Type.String(),
  context: Type.String(),
  event: Type.RegEx(/^sendToPlugin|sendToPropertyInspector$/),
  payload: Type.Dict(Type.Any()),
});

export const SendToPluginEventType = Type.Intersect([
  Type.Omit(SendToEventType, ['event']),
  Type.Object({
    event: Type.RegEx(/^sendToPlugin$/),
  }),
]);

export const SendToPropertyInspectorEventType = Type.Intersect([
  Type.Omit(SendToEventType, ['event']),
  Type.Object({
    event: Type.RegEx(/^sendToPropertyInspector$/),
  }),
]);
