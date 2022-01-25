import { PropertyInspectorDidDisppearType } from '@/StreamdeckTypes/Sent';

import AbstractReceivedExtendedEvent from '../AbstractReceivedExtendedEvent';

export default class PropertyInspectorDidDisappearEvent extends AbstractReceivedExtendedEvent {
  public readonly event = 'propertyInspectorDidDisappear';

  protected get validationType(): typeof PropertyInspectorDidDisppearType {
    return PropertyInspectorDidDisppearType;
  }
}
