import AbstractReceivedExtendedEvent from '../AbstractReceivedExtendedEvent';
import { PropertyInspectorDidAppearType } from '@/StreamdeckTypes/Sent';

export default class PropertyInspectorDidAppearEvent extends AbstractReceivedExtendedEvent {
  public readonly event = 'propertyInspectorDidAppear';

  protected get validationType(): typeof PropertyInspectorDidAppearType {
    return PropertyInspectorDidAppearType;
  }
}
