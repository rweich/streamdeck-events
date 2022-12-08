import { Static, Type } from '@sinclair/typebox';

import { BaseFeedbackComponentProperties, OptionalNullable } from './BaseFeedbackComponent';

export enum BarComponentSubtype {
  SQUARE_BAR = 0,
  SQUARE_CENTERED_BAR = 1,
  WEDGE_BAR = 2,
  DOUBLE_WEDGE_BAR = 3,
  ROUNDED_BAR = 4,
}

export const BarValueType = Type.Number({ maximum: 100, minimum: 0 });

export const BarFeedbackComponentProperties = {
  ...BaseFeedbackComponentProperties,

  bar_bg_c: OptionalNullable(Type.String()),
  bar_border_c: OptionalNullable(Type.String()),
  bar_fill_c: OptionalNullable(Type.String()),

  border_w: OptionalNullable(Type.Number({ default: 0, minimum: 0 })),

  subtype: OptionalNullable(Type.Enum(BarComponentSubtype, { default: BarComponentSubtype.ROUNDED_BAR })),
  value: OptionalNullable(BarValueType),
};
export const BarFeedbackComponent = Type.Object(BarFeedbackComponentProperties);
export type BarFeedbackComponent = Static<typeof BarFeedbackComponent>;

export const WrappedBarFeedbackComponent = Type.Union([BarFeedbackComponent, BarValueType]);
