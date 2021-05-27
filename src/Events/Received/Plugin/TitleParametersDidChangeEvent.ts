import AbstractReceivedExtendedEvent from '../AbstractReceivedExtendedEvent';
import { TitleParametersDidChangeType } from '@/StreamdeckTypes/Sent';

export default class TitleParametersDidChangeEvent extends AbstractReceivedExtendedEvent {
  public readonly event = 'titleParametersDidChange';
  protected eventPayload!: TitleParametersDidChangeType;

  public get settings(): unknown {
    return this.eventPayload.payload.settings;
  }

  public get row(): number {
    return this.eventPayload.payload.coordinates.row;
  }

  public get column(): number {
    return this.eventPayload.payload.coordinates.column;
  }

  public get state(): number {
    return this.eventPayload.payload.state;
  }

  public get title(): string {
    return this.eventPayload.payload.title;
  }

  public get fontFamily(): string {
    return this.eventPayload.payload.titleParameters.fontFamily;
  }

  public get fontSize(): number {
    return this.eventPayload.payload.titleParameters.fontSize;
  }

  public get fontStyle(): string {
    return this.eventPayload.payload.titleParameters.fontStyle;
  }

  public get fontUnderline(): boolean {
    return this.eventPayload.payload.titleParameters.fontUnderline;
  }

  public get showTitle(): boolean {
    return this.eventPayload.payload.titleParameters.showTitle;
  }

  public get titleAlignment(): string {
    return this.eventPayload.payload.titleParameters.titleAlignment;
  }

  public get titleColor(): string {
    return this.eventPayload.payload.titleParameters.titleColor;
  }

  protected get validationType(): typeof TitleParametersDidChangeType {
    return TitleParametersDidChangeType;
  }
}
