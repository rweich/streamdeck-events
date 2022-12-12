import AbstractStateEvent from '@/Events/Received/Plugin/AbstractStateEvent';
import { ControllerType } from '@/Events/Received/Plugin/ControllerType';
import { BaseVisibilityType } from '@/StreamdeckTypes/Sent/BaseVisibilityType';

export default abstract class AbstractVisibilityEvent extends AbstractStateEvent {
  protected readonly eventPayload!: BaseVisibilityType;

  /**
   * Return the controller type associated with this specific event. Used to determine if a specific event is on a
   * standard button or a rotary dial. This will not change during an action's lifecycle.
   * For plugins running on Stream Deck software v5, this will always return "Keypad".
   * @returns {ControllerType} The controller type (either "Keypad" or "Encoder") of this action's event.
   */
  public get controller(): ControllerType {
    // Fallback to Keypad is okay, as this will always be set on v6+, and v5 only supports keypad-driven events.
    // A v6-aware plugin looking for an encoder while running on v5 will simply receive Keypad and carry on normally.
    return this.eventPayload.payload.controller ?? ControllerType.Keypad;
  }
}
