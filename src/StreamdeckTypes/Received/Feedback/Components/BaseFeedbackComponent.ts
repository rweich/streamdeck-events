import { Static, TSchema, Type } from '@sinclair/typebox';

export const Nullable = <T extends TSchema>(type: T) => Type.Union([type, Type.Null()]);
export const OptionalNullable = <T extends TSchema>(type: T) => Type.Optional(Nullable(type));

const OutlinableFeedbackComponentProperties = {
  outline_c: OptionalNullable(Type.String()),
  outline_w: OptionalNullable(Type.Number({ minimum: 0 })),
  // outline_m: Type.Unknown(),
};

const TransformableFeedbackComponentProperties = {
  opacity: OptionalNullable(Type.Number({ default: 1, maximum: 1, minimum: 0 })),
  rotate: OptionalNullable(Type.Number({ default: 0 })),
  scale: OptionalNullable(Type.Number({ default: 1 })),
  // translate: Type.Unknown(),
};

export const BaseFeedbackComponentProperties = {
  ...OutlinableFeedbackComponentProperties,
  ...TransformableFeedbackComponentProperties,

  background: OptionalNullable(Type.String()),
  enabled: Type.Optional(Type.Boolean()),
  value: Type.Optional(Type.Union([Type.String(), Type.Number(), Type.Null()])),
  zOrder: Type.Optional(Type.Number()),
};
export const BaseFeedbackComponent = Type.Object(BaseFeedbackComponentProperties);
export type BaseFeedbackComponent = Static<typeof BaseFeedbackComponent>;
