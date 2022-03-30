import { Static, Type } from '@sinclair/typebox';

import { BaseContextProperties } from '@/StreamdeckTypes/Sent/BaseContextType';

export const BaseExtendedProperties = {
  ...BaseContextProperties,
  action: Type.String(),
  device: Type.String(),
};

export const BaseExtendedType = Type.Object(BaseExtendedProperties);
export type BaseExtendedType = Static<typeof BaseExtendedType>;
