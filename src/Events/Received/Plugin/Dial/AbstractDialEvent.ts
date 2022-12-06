import AbstractReceivedExtendedEvent from "@/Events/Received/AbstractReceivedExtendedEvent";
import {BaseDialType} from "@/StreamdeckTypes/Sent/Dial/BaseDialType";

export default abstract class AbstractDialEvent extends AbstractReceivedExtendedEvent {
  declare protected readonly eventPayload: BaseDialType;

  public get settings(): unknown {
    return this.eventPayload.payload.settings;
  }

  public get controller(): string {
    return this.eventPayload.payload.controller;
  }

  public get row(): number | undefined {
    return this.eventPayload.payload.coordinates?.row;
  }

  public get column(): number | undefined {
    return this.eventPayload.payload.coordinates?.column;
  }
}
