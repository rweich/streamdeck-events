import { Static, Type } from '@sinclair/typebox';

import { BaseFeedbackComponentProperties } from './BaseFeedbackComponent';

/**
 * @deprecated The Placcard feedback component has been marked as deprecated in SDK 6.1 and will be removed in a future
 * version of the SDK. Users seeking its functionality should use the `pixmap` component without setting an image.
 */
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

/**
 * @deprecated The Placcard feedback component has been marked as deprecated in SDK 6.1 and will be removed in a future
 * version of the SDK. Users seeking its functionality should use the `pixmap` component without setting an image.
 */
export const PlaccardFeedbackComponent = Type.Object(PlaccardFeedbackComponentProperties);

/**
 * @deprecated The Placcard feedback component has been marked as deprecated in SDK 6.1 and will be removed in a future
 * version of the SDK. Users seeking its functionality should use the `pixmap` component without setting an image.
 */
export type PlaccardFeedbackComponent = Static<typeof PlaccardFeedbackComponent>;
