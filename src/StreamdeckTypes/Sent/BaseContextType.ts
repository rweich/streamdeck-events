import { Static, Type } from '@sinclair/typebox';

import { BaseEventType } from './BaseEventType';

export const BaseContextType = Type.Intersect([
  BaseEventType,
  Type.Object({
    context: Type.String(),
  }),
]);
export type BaseContextType = Static<typeof BaseContextType>;
