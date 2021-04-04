import AbstractApplicationEvent from './AbstractApplicationEvent';
import { ApplicationDidTerminatEventType } from '../streamdecktypes/ApplicationEventType';

export default class ApplicationDidTerminateEvent extends AbstractApplicationEvent {
  protected get validationType(): typeof ApplicationDidTerminatEventType {
    return ApplicationDidTerminatEventType;
  }
}
