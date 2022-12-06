import {TouchTapEventType} from "@/StreamdeckTypes/Sent/Dial/TouchTapEventType";
import AbstractDialEvent from "@/Events/Received/Plugin/Dial/AbstractDialEvent";

export default class TouchTapEvent extends AbstractDialEvent {
  public readonly event = 'touchTap';
  declare protected readonly eventPayload: TouchTapEventType;

  protected get validationType(): typeof TouchTapEventType {
    return TouchTapEventType;
  }

  public get hold(): Boolean {
    return this.eventPayload.payload.hold;
  }

  public get tapPos(): Array<Number> {
    return this.eventPayload.payload.tapPos;
  }
}
