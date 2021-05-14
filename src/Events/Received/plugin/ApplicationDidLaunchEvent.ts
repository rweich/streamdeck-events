import AbstractApplicationEvent from './AbstractApplicationEvent';
import { ApplicationDidLaunchType } from '@/StreamdeckTypes';

export default class ApplicationDidLaunchEvent extends AbstractApplicationEvent {
  protected get validationType(): typeof ApplicationDidLaunchType {
    return ApplicationDidLaunchType;
  }
}
