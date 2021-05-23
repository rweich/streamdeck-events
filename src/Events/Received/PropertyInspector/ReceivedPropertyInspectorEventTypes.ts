import { ReceivedEventTypes } from '@/Events/Received';
import { SendToPropertyInspectorEvent } from '@/Events/Received/PropertyInspector';

export type ReceivedPropertyInspectorEventTypes = ReceivedEventTypes | SendToPropertyInspectorEvent;
