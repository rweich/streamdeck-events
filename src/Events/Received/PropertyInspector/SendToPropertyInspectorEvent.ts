import AbstractSendToEvent from '../AbstractSendToEvent';
import { SendToPropertyInspectorType } from '@/StreamdeckTypes/Sent';

export default class SendToPropertyInspectorEvent extends AbstractSendToEvent {
  public readonly event = 'sendToPropertyInspector';

  protected get validationType(): typeof SendToPropertyInspectorType {
    return SendToPropertyInspectorType;
  }
}
