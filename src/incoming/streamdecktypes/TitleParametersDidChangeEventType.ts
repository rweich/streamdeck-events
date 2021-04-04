import { CoordinatesPayloadType } from './CoordinatesPayloadType';
import { Type } from '@sinclair/typebox';

export const TitleParametersDidChangeEventType = Type.Object({
  action: Type.String(),
  context: Type.String(),
  device: Type.String(),
  event: Type.RegEx(/^titleParametersDidChange$/),
  payload: Type.Object({
    coordinates: CoordinatesPayloadType,
    settings: Type.Any(),
    state: Type.Number(),
    title: Type.String(),
    titleParameters: Type.Object({
      fontFamily: Type.String(),
      fontSize: Type.Number(),
      fontStyle: Type.String(),
      fontUnderline: Type.Boolean(),
      showTitle: Type.Boolean(),
      titleAlignment: Type.RegEx(/^top|bottom|middle$/),
      titleColor: Type.String(),
    }),
  }),
});
