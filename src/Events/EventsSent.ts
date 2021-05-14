import { GetSettingsEvent, LogMessageEvent, OpenUrlEvent, RegisterEvent, SetSettingsEvent } from '@/Events/Sent';
import { SendToPropertyInspectorEvent, SetImageEvent, SetTitleEvent, TargetEnum } from '@/Events/Sent/Plugin';

export default class EventsSent {
  public getSettings(context: string): GetSettingsEvent {
    return new GetSettingsEvent(context);
  }

  public logMessage(message: string): LogMessageEvent {
    return new LogMessageEvent(message);
  }

  public openUrl(url: string): OpenUrlEvent {
    return new OpenUrlEvent(url);
  }

  public register(event: string, uuid: string): RegisterEvent {
    return new RegisterEvent(event, uuid);
  }

  public sendToPropertyInspector(action: string, context: string, payload: unknown): SendToPropertyInspectorEvent {
    return new SendToPropertyInspectorEvent(action, context, payload);
  }

  public setImage(image: string, context: string, target: TargetEnum = TargetEnum.Both, state?: number): SetImageEvent {
    return new SetImageEvent(image, context, target, state);
  }

  public setSettings(context: string, payload: unknown): SetSettingsEvent {
    return new SetSettingsEvent(context, payload);
  }

  public setTitle(title: string, context: string, target: TargetEnum = TargetEnum.Both, state?: number): SetTitleEvent {
    return new SetTitleEvent(title, context, target, state);
  }
}
