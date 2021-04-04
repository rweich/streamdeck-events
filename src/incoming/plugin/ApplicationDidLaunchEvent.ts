import AbstractApplicationEvent from './AbstractApplicationEvent';
import { ApplicationDidLaunchEventType } from '../streamdecktypes/ApplicationEventType';

export default class ApplicationDidLaunchEvent extends AbstractApplicationEvent {
  protected get validationType(): typeof ApplicationDidLaunchEventType {
    return ApplicationDidLaunchEventType;
  }
}
