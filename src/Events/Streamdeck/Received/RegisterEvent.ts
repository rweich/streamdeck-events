import AbstractReceivedBaseEvent from '@/Events/Received/AbstractReceivedBaseEvent';
import { RegisterEventType } from '@/StreamdeckTypes/Received';

export default class RegisterEvent extends AbstractReceivedBaseEvent {
  protected readonly eventPayload!: RegisterEventType;

  public get event(): 'register' {
    return 'register';
  }

  /**
   * Returns the original name of the register event
   */
  public get inRegisterEvent(): string {
    return this.eventPayload.event;
  }

  public get uuid(): string {
    return this.eventPayload.uuid;
  }

  protected get validationType(): typeof RegisterEventType {
    return RegisterEventType;
  }
}
