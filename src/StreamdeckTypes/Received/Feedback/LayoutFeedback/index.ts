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

export type LayoutFeedbackKey = '$A0' | '$A1' | '$B1' | '$B2' | '$C1' | '$X0' | '$X1' | '$X2';
export type LayoutFeedback =
  | LayoutA0Feedback
  | LayoutA1Feedback
  | LayoutB1Feedback
  | LayoutB2Feedback
  | LayoutC1Feedback
  | LayoutX0Feedback
  | LayoutX1Feedback
  | LayoutX2Feedback;
