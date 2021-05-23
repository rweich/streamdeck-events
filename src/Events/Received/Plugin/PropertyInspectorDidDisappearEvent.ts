import AbstractReceivedExtendedEvent from '../AbstractReceivedExtendedEvent';
import { PropertyInspectorDidDisppearType } from '@/StreamdeckTypes/Sent';

export default class PropertyInspectorDidDisappearEvent extends AbstractReceivedExtendedEvent {
  public readonly event = 'propertyInspectorDidDisappear';

  protected get validationType(): typeof PropertyInspectorDidDisppearType {
    return PropertyInspectorDidDisppearType;
  }
}
