import { Type } from '@sinclair/typebox';

export const BaseCoordinatesPayloadType = Type.Object({
  column: Type.Number(),
  row: Type.Number(),
});
