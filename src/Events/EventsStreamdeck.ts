import { WillAppearEvent } from '@/Events/Streamdeck/Sent';
import { WillAppearOptions } from '@/Events/Streamdeck/Sent/WillAppearEvent';

export default class EventsStreamdeck {
  public createFromPayload(payload: unknown): unknown {
    //noop
    /*
    events received from plugin/pi:
    - setSettings
    - getSettings
    - setGlobalSettings
    - getGlobalSettings
    - openUrl
    - logMessage
    - setTitle
    - setImage
    - showAlert
    - showOk
    - setState
    - switchToProfile
    - sendToPropertyInspector
    - sendToPlugin
     */
    return 'foo';
  }

  /*
  events sent (from streamdeck to plugin/pi):
  - didReceiveSettings
  - didReceiveGlobalSettings
  - keyDown
  - keyUp
  + willAppear
  - willDisappear
  - titleParametersDidChange
  - deviceDidConnect
  - deviceDidDisconnect
  - applicationDidLaunch
  - applicationDidTerminate
  - systemDidWakeUp
  - propertyInspectorDidAppear
  - propertyInspectorDidDisappear
  - sendToPlugin
  - sendToPropertyInspector
   */

  public willAppear(
    action: string,
    context: string,
    options?: Partial<Omit<WillAppearOptions, 'event'>>,
  ): WillAppearEvent {
    return new WillAppearEvent(action, context, options);
  }
}
