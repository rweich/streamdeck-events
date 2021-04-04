import { BaseEventType } from './BaseEventType';
import { Type } from '@sinclair/typebox';

export const ExtendedEventType = Type.Intersect([
  BaseEventType,
  Type.Object({
    action: Type.String(),
    context: Type.String(),
    device: Type.String(),
  }),
]);
