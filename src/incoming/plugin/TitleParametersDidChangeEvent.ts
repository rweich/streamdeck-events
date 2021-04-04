import AbstractIncomingExtendedEvent from '../AbstractIncomingExtendedEvent';
import { TitleParametersDidChangeEventType } from '../streamdecktypes/TitleParametersDidChangeEventType';

export default class TitleParametersDidChangeEvent extends AbstractIncomingExtendedEvent {
  protected get validationType(): typeof TitleParametersDidChangeEventType {
    return TitleParametersDidChangeEventType;
  }
}
