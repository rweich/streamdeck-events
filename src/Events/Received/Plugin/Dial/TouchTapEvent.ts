import AbstractDialEvent from '@/Events/Received/Plugin/Dial/AbstractDialEvent';
import { TouchTapEventType } from '@/StreamdeckTypes/Sent/Dial/TouchTapEventType';

/**
 * An event fired when the user touches the screen on a specific dial action.
 *
 * This event fires immediately after the user has removed their finger from the screen in a quick tap-and-release, or
 * after holding their finger on the screen for approximately 500 milliseconds. No event is fired upon the user removing
 * their finger from the screen in a hold, nor for holds that don't reach the dwell time.
 */
export default class TouchTapEvent extends AbstractDialEvent {
  public readonly event = 'touchTap';
  protected declare readonly eventPayload: TouchTapEventType;

  protected get validationType(): typeof TouchTapEventType {
    return TouchTapEventType;
  }

  /**
   * Check if the user held the touch screen for approximately 500 milliseconds.
   * @returns {boolean} Returns true if this touch event was a hold, false otherwise.
   */
  public get hold(): boolean {
    return this.eventPayload.payload.hold;
  }

  /**
   * Get the precise position of the touch screen tap event. The `[0, 0]` coordinate matches the top left of the
   * dial's display, while `[200, 100]` represents the bottom right.
   * @returns Returns a tuple in form [X, Y].
   */
  public get tapPos(): [number, number] {
    return this.eventPayload.payload.tapPos;
  }
}
