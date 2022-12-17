import {
  GetGlobalSettingsEvent,
  GetSettingsEvent,
  LogMessageEvent,
  OpenUrlEvent,
  RegisterEvent,
  SetGlobalSettingsEvent,
  SetSettingsEvent,
  SetStateEvent,
  ShowAlertEvent,
  ShowOkEvent,
  SwitchToProfileEvent,
} from '@/Events/Sent';
import {
  SendToPropertyInspectorEvent,
  SetFeedbackEvent,
  SetFeedbackLayoutEvent,
  SetImageEvent,
  SetTitleEvent,
  TargetEnum,
} from '@/Events/Sent/Plugin';
import { SendToPluginEvent } from '@/Events/Sent/PropertyInspector';
import {
  GenericLayoutFeedback,
  LayoutFeedback,
  LayoutFeedbackKey,
} from '@/StreamdeckTypes/Received/Feedback/LayoutFeedback';

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

  public setState(state: number, context: string): SetStateEvent {
    return new SetStateEvent(state, context);
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

  public showAlert(context: string): ShowAlertEvent {
    return new ShowAlertEvent(context);
  }

  public showOk(context: string): ShowOkEvent {
    return new ShowOkEvent(context);
  }

  public switchToProfile(profile: string, context: string, device: string): SwitchToProfileEvent {
    return new SwitchToProfileEvent(profile, context, device);
  }

  /**
   * Send a command to the Stream Deck to update the Feedback displayed for a specific dial.
   *
   * SetFeedbackEvent's payload takes a key-value record of properties that will require some care to be taken, as it is
   * not particularly type safe. Developers are encouraged to either use built-in layout types or define their own types
   * for use in this event. As a general rule though, this payload works as follows:
   * - Keys in the object represent the element in the feedback that will be modified
   * - Values in the object will generally be an object that represents the changes that should be made to an element,
   *   based on the element's type.
   * - Values may also be a string or number, which will directly set the `value` of the associated element.
   * - The keys `title` and `icon` can *only* have the value updated, either through direct assignment or by an object
   *   containing a `value` key.
   * - Unrecognized keys and values are ignored with no notification or error.
   *
   * To create custom feedback types, please refer to {@link LayoutA0Feedback} et al.
   *
   * @param payload The feedback object to send to the Stream Deck, based on at least GenericLayoutFeedback.
   * @param context The opaque context representing the Stream Deck dial that needs to be updated.
   */
  public setFeedback(payload: LayoutFeedback | GenericLayoutFeedback, context: string) {
    return new SetFeedbackEvent(payload, context);
  }

  /**
   * Send a command to the Stream Deck to update the Feedback Layout for a specific dial.
   *
   * The Stream Deck application ships with a number of layouts built-in (see {@link LayoutFeedbackKey} for this list),
   * but custom layouts may be created and stored in the plugin archive which may then be used. An invalid feedback
   * layout will fall back to only displaying the title and icon.
   *
   * Changing the layout feedback *will* reset all feedback currently on the device, so developers need to take care
   * to repopulate feedback (if necessary) after sending this command.
   *
   * @param layout A layout key or path (relative to the plugin's root) to use as the layout for this dial.
   * @param context The opaque context representing the Stream Deck dial that needs to be updated.
   */
  public setFeedbackLayout(layout: LayoutFeedbackKey | string, context: string) {
    return new SetFeedbackLayoutEvent(layout, context);
  }
}
