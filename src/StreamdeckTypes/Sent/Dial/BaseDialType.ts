import { Static, Type } from '@sinclair/typebox';

import { ControllerType } from '@/Events/Received/Plugin/ControllerType';
import { BaseCoordinatesPayloadType } from '@/StreamdeckTypes/Sent/BaseCoordinatesPayloadType';
import { BaseExtendedProperties } from '@/StreamdeckTypes/Sent/BaseExtendedType';

export const BaseDialPayloadProperties = {
  controller: Type.Literal(ControllerType.Encoder), // undocumented!
  coordinates: Type.Optional(BaseCoordinatesPayloadType),
  settings: Type.Any(),
};

export const BaseDialProperties = {
  ...BaseExtendedProperties,
  event: Type.RegEx(/^dialPress|dialRotate|touchTap$/),
  payload: Type.Object(BaseDialPayloadProperties),
};

export const BaseDialType = Type.Object(BaseDialProperties);
export type BaseDialType = Static<typeof BaseDialType>;
