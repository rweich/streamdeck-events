import { EventFactory } from '@/Events/Received';
import { ReceivedEventTypes } from '@/Events/Received/ReceivedEventTypes';

export default class EventsReceived {
  public createFromPayload(payload: unknown): ReceivedEventTypes {
    return new EventFactory().createByEventPayload(payload);
  }
}
