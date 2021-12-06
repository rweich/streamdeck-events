import { Static, Type } from '@sinclair/typebox';

import { BaseCoordinatesPayloadType } from './BaseCoordinatesPayloadType';

export const BaseStateType = Type.Object({
  action: Type.String(),
  context: Type.String(),
  device: Type.String(),
  event: Type.RegEx(/^willAppear|willDisappear|didReceiveSettings$/),
  payload: Type.Object({
    coordinates: Type.Optional(BaseCoordinatesPayloadType),
    isInMultiAction: Type.Boolean(),
    settings: Type.Unknown(),
    state: Type.Optional(Type.Number()),
  }),
});
export type BaseStateType = Static<typeof BaseStateType>;
