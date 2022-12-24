import { Static, Type } from '@sinclair/typebox';

import { BaseFeedbackComponentProperties } from './BaseFeedbackComponent';

export const PlaccardFeedbackComponentProperties = {
  ...BaseFeedbackComponentProperties,

  rect: Type.Optional(
    Type.Tuple([
      Type.Number({ maximum: 200, minimum: 0 }), // x
      Type.Number({ maximum: 100, minimum: 0 }), // y
      Type.Number({ minimum: 0 }), // w
      Type.Number({ minimum: 0 }), // h
    ]),
  ),
};
export const PlaccardFeedbackComponent = Type.Object(PlaccardFeedbackComponentProperties);
export type PlaccardFeedbackComponent = Static<typeof PlaccardFeedbackComponent>;
