import { EventFactory } from '@/Events/Streamdeck/Received';
import { ReceivedEventTypes } from '@/Events/Streamdeck/Received/ReceivedEventTypes';
import {
  DeviceDidConnectEvent,
  DeviceDidDisconnectEvent,
  DidReceiveGlobalSettingsEvent,
  DidReceiveSettingsEvent,
  KeyDownEvent,
  KeyUpEvent,
  TitleParametersDidChangeEvent,
  WillAppearEvent,
  WillDisappearEvent,
} from '@/Events/Streamdeck/Sent';
import { KeyOptions } from '@/Events/Streamdeck/Sent/AbstractKeyEvent';
import { StateOptions } from '@/Events/Streamdeck/Sent/AbstractStateEvent';
import { DeviceDidConnectOptions } from '@/Events/Streamdeck/Sent/DeviceDidConnectEvent';
import { TitleParametersDidChangeOptions } from '@/Events/Streamdeck/Sent/TitleParametersDidChangeEvent';

export default class EventsStreamdeck {
  public createFromPayload(payload: unknown): ReceivedEventTypes {
    return new EventFactory().createByEventPayload(payload);
  }

  /*
  events sent (from streamdeck to plugin/pi):
  - applicationDidLaunch
  - applicationDidTerminate
  - systemDidWakeUp
  - propertyInspectorDidAppear
  - propertyInspectorDidDisappear
  - sendToPlugin
  - sendToPropertyInspector
   */

  public deviceDidConnect(device: string, options?: Partial<DeviceDidConnectOptions>): DeviceDidConnectEvent {
    return new DeviceDidConnectEvent(device, options);
  }

  public deviceDidDisconnect(device: string): DeviceDidDisconnectEvent {
    return new DeviceDidDisconnectEvent(device);
  }

  public didReceiveGlobalSettings(settings: Record<string, unknown>): DidReceiveGlobalSettingsEvent {
    return new DidReceiveGlobalSettingsEvent(settings);
  }

  public didReceiveSettings(action: string, context: string, options?: Partial<StateOptions>): DidReceiveSettingsEvent {
    return new DidReceiveSettingsEvent(action, context, options);
  }

  public keyDown(action: string, context: string, options?: Partial<KeyOptions>): KeyDownEvent {
    return new KeyDownEvent(action, context, options);
  }

  public keyUp(action: string, context: string, options?: Partial<KeyOptions>): KeyUpEvent {
    return new KeyUpEvent(action, context, options);
  }

  public titleParametersDidChange(
    action: string,
    context: string,
    options?: Partial<TitleParametersDidChangeOptions>,
  ): TitleParametersDidChangeEvent {
    return new TitleParametersDidChangeEvent(action, context, options);
  }

  public willAppear(action: string, context: string, options?: Partial<StateOptions>): WillAppearEvent {
    return new WillAppearEvent(action, context, options);
  }

  public willDisappear(action: string, context: string, options?: Partial<StateOptions>): WillDisappearEvent {
    return new WillDisappearEvent(action, context, options);
  }
}
