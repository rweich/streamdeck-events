import AbstractSendToEvent from '@/Events/Received/AbstractSendToEvent';
import { SendToPluginType } from '@/StreamdeckTypes/Sent';

export default class SendToPluginEvent extends AbstractSendToEvent {
  protected get validationType(): typeof SendToPluginType {
    return SendToPluginType;
  }
}
