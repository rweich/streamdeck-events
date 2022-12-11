import AbstractStateEvent from '@/Events/Received/Plugin/AbstractStateEvent';
import { ControllerType } from '@/Events/Received/Plugin/ControllerType';
import { BaseVisibilityType } from '@/StreamdeckTypes/Sent/BaseVisibilityType';

export default abstract class AbstractVisibilityEvent extends AbstractStateEvent {
  protected readonly eventPayload!: BaseVisibilityType;

  public get controller(): ControllerType {
    return this.eventPayload.payload.controller;
  }
}
