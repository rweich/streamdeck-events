export enum ControllerType {
  /**
   * Represents actions present on "keypad" style buttons within the button matrix of a Stream Deck, or a Corsair
   * hotkey.
   */
  Keypad = 'Keypad',

  /**
   * Represents actions present on dials or rotary encoders, such as those on the Stream Deck Plus. In addition to
   * rotary events, these actions have the ability to show feedback (see {@link SetFeedbackEvent}) to display state to
   * users.
   *
   * Only present when using Stream Deck 6.0 or later.
   */
  Encoder = 'Encoder',
}
