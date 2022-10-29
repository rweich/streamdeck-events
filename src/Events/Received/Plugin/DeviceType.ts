export enum DeviceType {
  StreamDeck,
  StreamDeckMini,
  StreamDeckXL,
  StreamDeckMobile,
  CorsairGKeys,
}

export function convertFromName(
  type: 'StreamDeck' | 'StreamDeckMini' | 'StreamDeckXL' | 'StreamDeckMobile' | 'CorsairGKeys',
): DeviceType {
  switch (type) {
    case 'StreamDeck':
      return DeviceType.StreamDeck;
    case 'StreamDeckMini':
      return DeviceType.StreamDeckMini;
    case 'StreamDeckXL':
      return DeviceType.StreamDeckXL;
    case 'StreamDeckMobile':
      return DeviceType.StreamDeckMobile;
    case 'CorsairGKeys':
      return DeviceType.CorsairGKeys;
    default:
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const completeCheck: never = type;
      throw new Error(`unknown devicetype name ${type}`);
  }
}
