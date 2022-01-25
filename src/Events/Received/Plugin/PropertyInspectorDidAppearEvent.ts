import { PropertyInspectorDidAppearType } from '@/StreamdeckTypes/Sent';

import AbstractReceivedExtendedEvent from '../AbstractReceivedExtendedEvent';

export default class PropertyInspectorDidAppearEvent extends AbstractReceivedExtendedEvent {
  public readonly event = 'propertyInspectorDidAppear';

  protected get validationType(): typeof PropertyInspectorDidAppearType {
    return PropertyInspectorDidAppearType;
  }
}
