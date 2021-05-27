import {
  GetGlobalSettingsEvent,
  GetSettingsEvent,
  LogMessageEvent,
  OpenUrlEvent,
  RegisterEvent,
  SetGlobalSettingsEvent,
  SetSettingsEvent,
} from '@/Events/Sent';
import { SendToPropertyInspectorEvent, SetImageEvent, SetTitleEvent, TargetEnum } from '@/Events/Sent/Plugin';

import { SendToPluginEvent } from '@/Events/Sent/PropertyInspector';

type TargetType = 'both' | 'hardware' | 'software';

export default class EventsSent {
  public getGlobalSettings(context: string): GetGlobalSettingsEvent {
    return new GetGlobalSettingsEvent(context);
  }

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

  public sendToPlugin(action: string, context: string, payload: unknown): SendToPluginEvent {
    return new SendToPluginEvent(action, context, payload);
  }

  public sendToPropertyInspector(action: string, context: string, payload: unknown): SendToPropertyInspectorEvent {
    return new SendToPropertyInspectorEvent(action, context, payload);
  }

  public setImage(image: string, context: string, target: TargetType = 'both', state?: number): SetImageEvent {
    let targetEnum = TargetEnum.Both;
    if (target === 'hardware') {
      targetEnum = TargetEnum.Hardware;
    } else if (target === 'software') {
      targetEnum = TargetEnum.Software;
    }
    return new SetImageEvent(image, context, targetEnum, state);
  }

  public setGlobalSettings(context: string, payload: unknown): SetGlobalSettingsEvent {
    return new SetGlobalSettingsEvent(context, payload);
  }

  public setSettings(context: string, payload: unknown): SetSettingsEvent {
    return new SetSettingsEvent(context, payload);
  }

  public setTitle(title: string, context: string, target: TargetType = 'both', state?: number): SetTitleEvent {
    let targetEnum = TargetEnum.Both;
    if (target === 'hardware') {
      targetEnum = TargetEnum.Hardware;
    } else if (target === 'software') {
      targetEnum = TargetEnum.Software;
    }
    return new SetTitleEvent(title, context, targetEnum, state);
  }
}
