import { ApplicationDidTerminateType } from '@/StreamdeckTypes/Sent';

import AbstractApplicationEvent from './AbstractApplicationEvent';

export default class ApplicationDidTerminateEvent extends AbstractApplicationEvent {
  public readonly event = 'applicationDidTerminate';

  protected get validationType(): typeof ApplicationDidTerminateType {
    return ApplicationDidTerminateType;
  }
}
