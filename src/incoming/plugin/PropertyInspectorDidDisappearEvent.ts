import AbstractIncomingExtendedEvent from '../AbstractIncomingExtendedEvent';
import { PropertyInspectorDidDisppearEventType } from '../streamdecktypes/PropertyInspectorEventType';

export default class PropertyInspectorDidDisappearEvent extends AbstractIncomingExtendedEvent {
  protected get validationType(): typeof PropertyInspectorDidDisppearEventType {
    return PropertyInspectorDidDisppearEventType;
  }
}
