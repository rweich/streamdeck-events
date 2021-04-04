import { CoordinatesPayloadType } from './CoordinatesPayloadType';
import { Type } from '@sinclair/typebox';

export const StateEventType = Type.Object({
  action: Type.String(),
  context: Type.String(),
  device: Type.String(),
  event: Type.RegEx(/^willAppear|willDisappear|didReceiveSettings$/),
  payload: Type.Object({
    coordinates: CoordinatesPayloadType,
    isInMultiAction: Type.Boolean(),
    settings: Type.Unknown(),
    state: Type.Optional(Type.Number()),
  }),
});

export const WillAppearEventType = Type.Intersect([
  Type.Omit(StateEventType, ['event']),
  Type.Object({
    event: Type.RegEx(/^willAppear$/),
  }),
]);

export const WillDisappearEventType = Type.Intersect([
  Type.Omit(StateEventType, ['event']),
  Type.Object({
    event: Type.RegEx(/^willDisappear$/),
  }),
]);
