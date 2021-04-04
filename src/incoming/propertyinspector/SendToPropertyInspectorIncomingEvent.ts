import AbstractSendToEvent from '../AbstractSendToEvent';
import { SendToPropertyInspectorEventType } from '../streamdecktypes/SendToEventType';

export default class SendToPropertyInspectorIncomingEvent extends AbstractSendToEvent {
  protected get validationType(): typeof SendToPropertyInspectorEventType {
    return SendToPropertyInspectorEventType;
  }
}
