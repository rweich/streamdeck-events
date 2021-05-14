import AbstractReceivedExtendedEvent from '../AbstractReceivedExtendedEvent';
import { TitleParametersDidChangeType } from '@/StreamdeckTypes';

export default class TitleParametersDidChangeEvent extends AbstractReceivedExtendedEvent {
  protected get validationType(): typeof TitleParametersDidChangeType {
    return TitleParametersDidChangeType;
  }
}
