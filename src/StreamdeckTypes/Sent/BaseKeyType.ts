import { Static, Type } from '@sinclair/typebox';

import { BaseCoordinatesPayloadType } from './BaseCoordinatesPayloadType';
import { BaseExtendedType } from './BaseExtendedType';

export const BaseKeyType = Type.Intersect([
  Type.Omit(BaseExtendedType, ['event']),
  Type.Object({
    event: Type.RegEx(/^keyDown|keyUp$/),
    payload: Type.Object({
      coordinates: Type.Optional(BaseCoordinatesPayloadType),
      isInMultiAction: Type.Boolean(),
      settings: Type.Any(),
      state: Type.Optional(Type.Number({ maximum: 1, minimum: 0 })),
      userDesiredState: Type.Optional(Type.Number({ maximum: 1, minimum: 0 })),
    }),
  }),
]);
export type BaseKeyType = Static<typeof BaseKeyType>;
