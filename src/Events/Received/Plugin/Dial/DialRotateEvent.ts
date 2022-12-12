import AbstractEncoderEvent from '@/Events/Received/Plugin/Dial/AbstractEncoderEvent';
import { DialRotateEventType } from '@/StreamdeckTypes/Sent/Dial';

/**
 * An event fired when the user rotates a dial on their Stream Deck.
 *
 * The Stream Deck software may elect to compress multiple incremental steps ("ticks") into a single event, especially
 * if the user is turning a dial very quickly. Consumers of this event should check the {@link ticks} value to
 * determine exactly how far the user rotated the dial. A dial may optionally be held during any given rotation, which
 * will be reflected accordingly.
 */
export default class DialRotateEvent extends AbstractEncoderEvent {
  public readonly event = 'dialRotate';
  protected declare readonly eventPayload: DialRotateEventType;

  protected get validationType(): typeof DialRotateEventType {
    return DialRotateEventType;
  }

  /**
   * Get the number of "ticks" for a given rotation event. Clockwise rotations will result in a positive value, while
   * counter-clockwise rotations will result in a negative one.
   * @returns The number of ticks that a dial was rotated.
   */
  public get ticks(): number {
    return this.eventPayload.payload.ticks;
  }
}
