import AbstractIncomingExtendedEvent from '../AbstractIncomingExtendedEvent';
import { PropertyInspectorDidAppearEventType } from '../streamdecktypes/PropertyInspectorEventType';

export default class PropertyInspectorDidAppearEvent extends AbstractIncomingExtendedEvent {
  protected get validationType(): typeof PropertyInspectorDidAppearEventType {
    return PropertyInspectorDidAppearEventType;
  }
}
