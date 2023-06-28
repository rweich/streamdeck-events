import { Static, Type } from '@sinclair/typebox';

import { BaseEncoderPayloadProperties, BaseEncoderProperties } from './BaseEncoderType';

/**
 * @deprecated The `dialPress` event was deprecated in Stream Deck SDK 6.1, and will be removed in a future version. It
 * has been replaced by the `dialDown` and `dialUp` events.
 */
export const DialPressPayloadProperties = {
  ...BaseEncoderPayloadProperties,
};

/**
 * @deprecated The `dialPress` event was deprecated in Stream Deck SDK 6.1, and will be removed in a future version. It
 * has been replaced by the `dialDown` and `dialUp` events.
 */
export const DialPressEventProperties = {
  ...BaseEncoderProperties,
  event: Type.RegEx(/^dialPress$/),
  payload: Type.Object(DialPressPayloadProperties),
};

/**
 * @deprecated The `dialPress` event was deprecated in Stream Deck SDK 6.1, and will be removed in a future version. It
 * has been replaced by the `dialDown` and `dialUp` events.
 */
export const DialPressEventType = Type.Object(DialPressEventProperties);

/**
 * @deprecated The `dialPress` event was deprecated in Stream Deck SDK 6.1, and will be removed in a future version. It
 * has been replaced by the `dialDown` and `dialUp` events.
 */
export type DialPressEventType = Static<typeof DialPressEventType>;
