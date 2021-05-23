import { EventFactory } from '@/Events/Received';
import { ReceivedPluginEventTypes } from '@/Events/Received/Plugin/ReceivedPluginEventTypes';
import { ReceivedPropertyInspectorEventTypes } from '@/Events/Received/PropertyInspector';

export default class EventsReceived {
  public createFromPayload(payload: unknown): ReceivedPluginEventTypes | ReceivedPropertyInspectorEventTypes {
    return new EventFactory().createByEventPayload(payload);
  }
}
