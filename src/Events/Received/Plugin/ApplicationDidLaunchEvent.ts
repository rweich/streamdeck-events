import { ApplicationDidLaunchType } from '@/StreamdeckTypes/Sent';

import AbstractApplicationEvent from './AbstractApplicationEvent';

export default class ApplicationDidLaunchEvent extends AbstractApplicationEvent {
  public readonly event = 'applicationDidLaunch';

  protected get validationType(): typeof ApplicationDidLaunchType {
    return ApplicationDidLaunchType;
  }
}
