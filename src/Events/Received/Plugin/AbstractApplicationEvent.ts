import { ApplicationDidLaunchType, ApplicationDidTerminateType } from '@/StreamdeckTypes';

import AbstractReceivedBaseEvent from '../AbstractReceivedBaseEvent';

export default abstract class AbstractApplicationEvent extends AbstractReceivedBaseEvent {
  protected readonly eventPayload!: ApplicationDidLaunchType | ApplicationDidTerminateType;

  public get application(): string {
    return this.eventPayload.payload.application;
  }
}
