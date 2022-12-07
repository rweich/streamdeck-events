import { TSchema, Type } from '@sinclair/typebox';

export const ValueWrapper = <T extends TSchema>(type: T) =>
  Type.Union([
    type,
    Type.Object({
      value: type,
    }),
  ]);
