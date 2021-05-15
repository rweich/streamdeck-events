import AbstractReceivedBaseEvent from '@/Events/Received/AbstractReceivedBaseEvent';
import { RegisterEventType } from '@/StreamdeckTypes/Received';

export default class RegisterEvent extends AbstractReceivedBaseEvent {
  protected readonly eventPayload!: RegisterEventType;

  public get uuid(): string {
    return this.eventPayload.uuid;
  }

  protected get validationType(): typeof RegisterEventType {
    return RegisterEventType;
  }
}
