import AbstractApplicationEvent from './AbstractApplicationEvent';
import { ApplicationDidLaunchType } from '@/StreamdeckTypes/Sent';

export default class ApplicationDidLaunchEvent extends AbstractApplicationEvent {
  public readonly event = 'applicationDidLaunch';

  protected get validationType(): typeof ApplicationDidLaunchType {
    return ApplicationDidLaunchType;
  }
}
