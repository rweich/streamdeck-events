import AbstractDialEvent from "@/Events/Received/Plugin/Dial/AbstractDialEvent";
import {BaseEncoderType} from "@/StreamdeckTypes/Sent/Dial/BaseEncoderType";

export default abstract class AbstractEncoderEvent extends AbstractDialEvent {
  declare protected readonly eventPayload: BaseEncoderType;

  public get pressed(): Boolean {
    return this.eventPayload.payload.pressed
  }
}
