import { Static, Type } from '@sinclair/typebox';

import { BaseContextType } from '@/StreamdeckTypes/Sent/BaseContextType';

export const BaseExtendedType = Type.Intersect([
  BaseContextType,
  Type.Object({
    action: Type.String(),
    device: Type.String(),
  }),
]);
export type BaseExtendedType = Static<typeof BaseExtendedType>;
