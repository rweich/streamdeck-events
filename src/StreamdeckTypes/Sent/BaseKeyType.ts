import { Static, Type } from '@sinclair/typebox';

import { BaseCoordinatesPayloadType } from './BaseCoordinatesPayloadType';
import { BaseExtendedProperties } from './BaseExtendedType';

export const BaseKeyProperties = {
  ...BaseExtendedProperties,
  event: Type.RegEx(/^keyDown|keyUp$/),
  payload: Type.Object({
    coordinates: Type.Optional(BaseCoordinatesPayloadType),
    isInMultiAction: Type.Boolean(),
    settings: Type.Any(),
    state: Type.Optional(Type.Number({ minimum: 0 })),
    userDesiredState: Type.Optional(Type.Number({ maximum: 1, minimum: 0 })),
  }),
};

export const BaseKeyType = Type.Object(BaseKeyProperties);
export type BaseKeyType = Static<typeof BaseKeyType>;
