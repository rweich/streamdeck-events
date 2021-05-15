import AbstractReceivedContextEvent from '@/Events/Received/AbstractReceivedContextEvent';
import { SwitchToProfileType } from '@/StreamdeckTypes/Received';

export default class SwitchToProfileEvent extends AbstractReceivedContextEvent {
  protected readonly eventPayload!: SwitchToProfileType;

  public get device(): string {
    return this.eventPayload.device;
  }

  public get profile(): string {
    return this.eventPayload.payload.profile;
  }

  protected get validationType(): typeof SwitchToProfileType {
    return SwitchToProfileType;
  }
}
