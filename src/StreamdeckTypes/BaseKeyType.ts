import { Static, Type } from '@sinclair/typebox';

import { BaseCoordinatesPayloadType } from './BaseCoordinatesPayloadType';
import { BaseExtendedType } from './BaseExtendedType';

const basePayload = {
  coordinates: BaseCoordinatesPayloadType,
  isInMultiAction: Type.Boolean(),
  settings: Type.Any(),
};
const multiActionPayload = {
  ...basePayload,
  state: Type.Number(),
  userDesiredState: Type.Number(),
};

export const BaseKeyType = Type.Intersect([
  Type.Omit(BaseExtendedType, ['event']),
  Type.Object({
    event: Type.RegEx(/^keyDown|keyUp$/),
    payload: Type.Union([Type.Object(basePayload), Type.Object(multiActionPayload)]),
  }),
]);
export type BaseKeyType = Static<typeof BaseKeyType>;
