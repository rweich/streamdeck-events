import { WillAppearEvent } from '@/Events/Streamdeck';
import { WillAppearOptions } from '@/Events/Streamdeck/WillAppearEvent';

export default class EventsStreamdeck {
  public willAppear(
    action: string,
    context: string,
    options?: Partial<Omit<WillAppearOptions, 'event'>>,
  ): WillAppearEvent {
    return new WillAppearEvent(action, context, options);
  }
}
