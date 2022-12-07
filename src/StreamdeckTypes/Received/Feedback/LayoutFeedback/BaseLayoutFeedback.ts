import { Type } from '@sinclair/typebox';

import { ValueWrapper } from '@/StreamdeckTypes/Received/Feedback/Misc/ValueWrapper';

export const BaseLayoutFeedbackProperties = {
  title: Type.Optional(ValueWrapper(Type.Union([Type.String(), Type.Number()]))),
};

export const IconLayoutFeedbackProperties = {
  ...BaseLayoutFeedbackProperties,
  icon: Type.Optional(ValueWrapper(Type.String())),
};
