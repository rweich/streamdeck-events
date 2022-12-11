import { Static, Type } from '@sinclair/typebox';

import { ControllerType } from '@/Events/Received/Plugin/ControllerType';
import { BaseStatePayloadProperties, BaseStateProperties } from '@/StreamdeckTypes/Sent/BaseStateType';

export const BaseVisibilityProperties = {
  ...BaseStateProperties,
  event: Type.RegEx(/^willAppear|willDisappear$/),
  payload: Type.Object({
    ...BaseStatePayloadProperties,
    controller: Type.Enum(ControllerType),
  }),
};

export const BaseVisibilityType = Type.Object(BaseVisibilityProperties);
export type BaseVisibilityType = Static<typeof BaseVisibilityType>;
