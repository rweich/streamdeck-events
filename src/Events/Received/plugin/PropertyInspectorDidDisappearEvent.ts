import AbstractReceivedExtendedEvent from '../AbstractReceivedExtendedEvent';
import { PropertyInspectorDidDisppearType } from '@/StreamdeckTypes';

export default class PropertyInspectorDidDisappearEvent extends AbstractReceivedExtendedEvent {
  protected get validationType(): typeof PropertyInspectorDidDisppearType {
    return PropertyInspectorDidDisppearType;
  }
}
