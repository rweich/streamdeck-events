import { Static, Type } from '@sinclair/typebox';

import { BaseCoordinatesPayloadType } from './BaseCoordinatesPayloadType';

export const BaseStateProperties = {
  action: Type.String(),
  context: Type.String(),
  device: Type.String(),
  event: Type.RegEx(/^willAppear|willDisappear|didReceiveSettings$/),
  payload: Type.Object({
    controller: Type.Optional(Type.RegEx(/^Keypad|Encoder$/)),
    coordinates: Type.Optional(BaseCoordinatesPayloadType),
    isInMultiAction: Type.Boolean(),
    settings: Type.Unknown(),
    state: Type.Optional(Type.Number()),
  }),
};

export const BaseStateType = Type.Object(BaseStateProperties);
export type BaseStateType = Static<typeof BaseStateType>;
