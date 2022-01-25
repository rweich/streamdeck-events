import { SendToPropertyInspectorType } from '@/StreamdeckTypes/Sent';

import AbstractSendToEvent from '../AbstractSendToEvent';

export default class SendToPropertyInspectorEvent extends AbstractSendToEvent {
  public readonly event = 'sendToPropertyInspector';

  protected get validationType(): typeof SendToPropertyInspectorType {
    return SendToPropertyInspectorType;
  }
}
