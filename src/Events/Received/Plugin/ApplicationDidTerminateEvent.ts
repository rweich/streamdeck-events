import AbstractApplicationEvent from './AbstractApplicationEvent';
import { ApplicationDidTerminateType } from '@/StreamdeckTypes/Sent';

export default class ApplicationDidTerminateEvent extends AbstractApplicationEvent {
  protected get validationType(): typeof ApplicationDidTerminateType {
    return ApplicationDidTerminateType;
  }
}
