import AbstractReceivedBaseEvent from '@/Events/Received/AbstractReceivedBaseEvent';
import { LogMessageType } from '@/StreamdeckTypes/Received';

export default class LogMessageEvent extends AbstractReceivedBaseEvent {
  public readonly event = 'logMessage';
  protected readonly eventPayload!: LogMessageType;

  public get message(): string {
    return this.eventPayload.payload.message;
  }

  protected get validationType(): typeof LogMessageType {
    return LogMessageType;
  }
}
