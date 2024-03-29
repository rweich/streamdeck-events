import AbstractReceivedExtendedEvent from '@/Events/Received/AbstractReceivedExtendedEvent';
import { ControllerType } from '@/Events/Received/Plugin/ControllerType';
import { BaseDialType } from '@/StreamdeckTypes/Sent/Dial/BaseDialType';

export default abstract class AbstractDialEvent extends AbstractReceivedExtendedEvent {
  protected declare readonly eventPayload: BaseDialType;

  public get settings(): unknown {
    return this.eventPayload.payload.settings;
  }

  /**
   * Get the Controller that fired this event.
   * @returns {ControllerType} Will always return `Encoder`.
   */
  public get controller(): ControllerType {
    return this.eventPayload.payload.controller;
  }

  public get row(): number | undefined {
    return this.eventPayload.payload.coordinates?.row;
  }

  public get column(): number | undefined {
    return this.eventPayload.payload.coordinates?.column;
  }
}
