import { Static, Type } from '@sinclair/typebox';

import { FontFamily, FontStyle, TextAlignment } from '../Misc/TextTypes';
import { BaseComponentValueType, BaseFeedbackComponentProperties, OptionalNullable } from './BaseFeedbackComponent';

export const FontProperties = {
  family: Type.Optional(Type.Enum(FontFamily)),
  size: Type.Optional(Type.Number()),
  style: Type.Optional(Type.Enum(FontStyle)),
  weight: Type.Optional(Type.Number()),
};
export const FontProperty = Type.Object(FontProperties);
export type FontProperty = Static<typeof FontProperty>;

export const TextFeedbackComponentProperties = {
  ...BaseFeedbackComponentProperties,

  alignment: Type.Optional(Type.Enum(TextAlignment)),
  color: OptionalNullable(Type.String()),
  font: Type.Optional(FontProperty),
};
export const TextFeedbackComponent = Type.Object(TextFeedbackComponentProperties);
export type TextFeedbackComponent = Static<typeof TextFeedbackComponent>;

export const WrappedTextFeedbackComponent = Type.Union([TextFeedbackComponent, BaseComponentValueType]);
