import AbstractSetterEvent from '@/Events/Streamdeck/Received/AbstractSetterEvent';
import { SetTitleType } from '@/StreamdeckTypes/Received';

export default class SetTitleEvent extends AbstractSetterEvent {
  protected readonly eventPayload!: SetTitleType;

  public get title(): string {
    return this.eventPayload.payload.title;
  }

  protected get validationType(): typeof SetTitleType {
    return SetTitleType;
  }
}
