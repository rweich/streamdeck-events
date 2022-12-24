import { Static, Type } from '@sinclair/typebox';

import { BaseFeedbackComponentProperties, OptionalNullable } from './BaseFeedbackComponent';

export enum BarComponentSubtype {
  RECTANGLE = 0,
  DOUBLE_RECTANGLE = 1,
  TRAPEZOID = 2,
  DOUBLE_TRAPEZOID = 3,
  GROOVE = 4,
}

export const BarValueType = Type.Number({ maximum: 100, minimum: 0 });

export const BaseBarFeedbackComponentProperties = {
  ...BaseFeedbackComponentProperties,

  bar_bg_c: OptionalNullable(Type.String()),
  bar_border_c: OptionalNullable(Type.String()),

  border_w: OptionalNullable(Type.Number({ default: 2, minimum: 0 })),

  subtype: OptionalNullable(Type.Enum(BarComponentSubtype, { default: BarComponentSubtype.GROOVE })),
  value: OptionalNullable(BarValueType),
};

export const BarFeedbackComponentProperties = {
  ...BaseBarFeedbackComponentProperties,

  bar_fill_c: OptionalNullable(Type.String()),
};
export const BarFeedbackComponent = Type.Object(BarFeedbackComponentProperties);
export type BarFeedbackComponent = Static<typeof BarFeedbackComponent>;

export const WrappedBarFeedbackComponent = Type.Union([BarFeedbackComponent, BarValueType]);
