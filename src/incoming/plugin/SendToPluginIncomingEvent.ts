import AbstractSendToEvent from '../AbstractSendToEvent';
import { SendToPluginEventType } from '../streamdecktypes/SendToEventType';

export default class SendToPluginIncomingEvent extends AbstractSendToEvent {
  protected get validationType(): typeof SendToPluginEventType {
    return SendToPluginEventType;
  }
}
