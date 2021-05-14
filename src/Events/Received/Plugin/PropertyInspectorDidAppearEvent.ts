import AbstractReceivedExtendedEvent from '../AbstractReceivedExtendedEvent';
import { PropertyInspectorDidAppearType } from '@/StreamdeckTypes';

export default class PropertyInspectorDidAppearEvent extends AbstractReceivedExtendedEvent {
  protected get validationType(): typeof PropertyInspectorDidAppearType {
    return PropertyInspectorDidAppearType;
  }
}
