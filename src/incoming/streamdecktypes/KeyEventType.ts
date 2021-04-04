import { CoordinatesPayloadType } from './CoordinatesPayloadType';
import { ExtendedEventType } from './ExtendedEventType';
import { Type } from '@sinclair/typebox';

const basePayload = {
  coordinates: CoordinatesPayloadType,
  isInMultiAction: Type.Boolean(),
  settings: Type.Any(),
};
const multiActionPayload = {
  ...basePayload,
  state: Type.Number(),
  userDesiredState: Type.Number(),
};

export const KeyEventType = Type.Intersect([
  Type.Omit(ExtendedEventType, ['event']),
  Type.Object({
    event: Type.RegEx(/^keyDown|keyUp$/),
    payload: Type.Union([Type.Object(basePayload), Type.Object(multiActionPayload)]),
  }),
]);

export const KeyDownEventType = Type.Intersect([
  Type.Omit(KeyEventType, ['event']),
  Type.Object({
    event: Type.RegEx(/^keyDown$/),
  }),
]);

export const KeyUpEventType = Type.Intersect([
  Type.Omit(KeyEventType, ['event']),
  Type.Object({
    event: Type.RegEx(/^keyUp$/),
  }),
]);
