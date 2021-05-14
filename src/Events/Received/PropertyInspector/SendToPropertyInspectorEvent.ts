import AbstractSendToEvent from '../AbstractSendToEvent';
import { SendToPropertyInspectorType } from '@/StreamdeckTypes';

export default class SendToPropertyInspectorEvent extends AbstractSendToEvent {
  protected get validationType(): typeof SendToPropertyInspectorType {
    return SendToPropertyInspectorType;
  }
}
