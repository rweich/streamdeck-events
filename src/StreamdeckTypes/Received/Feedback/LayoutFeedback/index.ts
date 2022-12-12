import { Static } from '@sinclair/typebox';

import { LayoutA0Feedback } from './LayoutA0Feedback';
import { LayoutA1Feedback } from './LayoutA1Feedback';
import { LayoutB1Feedback } from './LayoutB1Feedback';
import { LayoutB2Feedback } from './LayoutB2Feedback';
import { LayoutC1Feedback } from './LayoutC1Feedback';
import { LayoutX0Feedback } from './LayoutX0Feedback';
import { LayoutX1Feedback } from './LayoutX1Feedback';
import { LayoutX2Feedback } from './LayoutX2Feedback';

export { LayoutA0Feedback } from './LayoutA0Feedback';
export { LayoutA1Feedback } from './LayoutA1Feedback';
export { LayoutB1Feedback } from './LayoutB1Feedback';
export { LayoutB2Feedback } from './LayoutB2Feedback';
export { LayoutC1Feedback } from './LayoutC1Feedback';
export { LayoutX0Feedback } from './LayoutX0Feedback';
export { LayoutX1Feedback } from './LayoutX1Feedback';
export { LayoutX2Feedback } from './LayoutX2Feedback';

export const LayoutFeedbackMapping = {
  $A0: LayoutA0Feedback,
  $A1: LayoutA1Feedback,
  $B1: LayoutB1Feedback,
  $B2: LayoutB2Feedback,
  $C1: LayoutC1Feedback,
  $X0: LayoutX0Feedback,
  $X1: LayoutX1Feedback,
  $X2: LayoutX2Feedback,
};

export type LayoutFeedbackKey = keyof typeof LayoutFeedbackMapping;
export type LayoutFeedback = Static<typeof LayoutFeedbackMapping[LayoutFeedbackKey]>;
