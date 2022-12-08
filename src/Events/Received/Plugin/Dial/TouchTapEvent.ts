import AbstractDialEvent from '@/Events/Received/Plugin/Dial/AbstractDialEvent';
import { TouchTapEventType } from '@/StreamdeckTypes/Sent/Dial/TouchTapEventType';

export default class TouchTapEvent extends AbstractDialEvent {
  public readonly event = 'touchTap';
  protected declare readonly eventPayload: TouchTapEventType;

  protected get validationType(): typeof TouchTapEventType {
    return TouchTapEventType;
  }

  public get hold(): boolean {
    return this.eventPayload.payload.hold;
  }

  public get tapPos(): Array<number> {
    return this.eventPayload.payload.tapPos;
  }
}
