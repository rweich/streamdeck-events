import { Static, Type } from '@sinclair/typebox';

import { BaseEventProperties } from './BaseEventType';

export const BaseContextProperties = {
  ...BaseEventProperties,
  context: Type.String(),
};

export const BaseContextType = Type.Object(BaseContextProperties);
export type BaseContextType = Static<typeof BaseContextType>;
