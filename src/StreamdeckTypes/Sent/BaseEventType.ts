import { Static, Type } from '@sinclair/typebox';

export const BaseEventProperties = {
  event: Type.String(),
};

export const BaseEventType = Type.Object(BaseEventProperties);
export type BaseEventType = Static<typeof BaseEventType>;
