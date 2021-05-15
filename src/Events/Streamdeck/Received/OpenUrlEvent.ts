import AbstractReceivedBaseEvent from '@/Events/Received/AbstractReceivedBaseEvent';
import { OpenUrlType } from '@/StreamdeckTypes/Received';

export default class OpenUrlEvent extends AbstractReceivedBaseEvent {
  protected readonly eventPayload!: OpenUrlType;

  public get url(): string {
    return this.eventPayload.payload.url;
  }

  protected get validationType(): typeof OpenUrlType {
    return OpenUrlType;
  }
}
