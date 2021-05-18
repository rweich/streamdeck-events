import AbstractSetterEvent from '@/Events/Streamdeck/Received/AbstractSetterEvent';
import { SetImageType } from '@/StreamdeckTypes/Received';

export default class SetImageEvent extends AbstractSetterEvent {
  protected readonly eventPayload!: SetImageType;

  public get event(): 'setImage' {
    return 'setImage';
  }

  public get image(): string {
    return this.eventPayload.payload.image;
  }

  protected get validationType(): typeof SetImageType {
    return SetImageType;
  }
}
