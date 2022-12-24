import { Static, TSchema, Type } from '@sinclair/typebox';

export const Nullable = <T extends TSchema>(type: T) => Type.Union([type, Type.Null()]);
export const OptionalNullable = <T extends TSchema>(type: T) => Type.Optional(Nullable(type));

const OutlinableFeedbackComponentProperties = {
  outline_c: OptionalNullable(Type.String()), // undocumented!
  outline_w: OptionalNullable(Type.Number({ minimum: 0 })), // undocumented!
};

const TransformableFeedbackComponentProperties = {
  opacity: OptionalNullable(Type.Number({ default: 1, maximum: 1, minimum: 0 })),
  rotate: OptionalNullable(Type.Number({ default: 0 })), // undocumented!
  scale: OptionalNullable(Type.Number({ default: 1 })), // undocumented!
};

export const BaseComponentValueType = Type.Union([Type.String(), Type.Number(), Type.Null()]);

export const BaseFeedbackComponentProperties = {
  ...OutlinableFeedbackComponentProperties,
  ...TransformableFeedbackComponentProperties,

  background: OptionalNullable(Type.String()),
  enabled: Type.Optional(Type.Boolean()),
  value: Type.Optional(BaseComponentValueType),
  zOrder: Type.Optional(Type.Number({ exclusiveMaximum: 700, minimum: 0 })),
};
export const BaseFeedbackComponent = Type.Object(BaseFeedbackComponentProperties);
export type BaseFeedbackComponent = Static<typeof BaseFeedbackComponent>;

export const WrappedBaseComponent = Type.Union([BaseFeedbackComponent, BaseComponentValueType]);
