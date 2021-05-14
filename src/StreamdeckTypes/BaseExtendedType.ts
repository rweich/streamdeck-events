import { Static, Type } from '@sinclair/typebox';

import { BaseEventType } from './BaseEventType';

export const BaseExtendedType = Type.Intersect([
  BaseEventType,
  Type.Object({
    action: Type.String(),
    context: Type.String(),
    device: Type.String(),
  }),
]);
export type BaseExtendedType = Static<typeof BaseExtendedType>;
