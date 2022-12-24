import { Static, Type } from '@sinclair/typebox';

import { PlaccardFeedbackComponent } from '@/StreamdeckTypes/Received/Feedback/Components';
import { WrappedBarFeedbackComponent } from '@/StreamdeckTypes/Received/Feedback/Components/BarFeedbackComponent';
import { WrappedGrooveBarFeedbackComponent } from '@/StreamdeckTypes/Received/Feedback/Components/GrooveBarFeedbackComponent';
import { WrappedPixmapFeedbackComponent } from '@/StreamdeckTypes/Received/Feedback/Components/PixmapFeedbackComponent';
import { WrappedTextFeedbackComponent } from '@/StreamdeckTypes/Received/Feedback/Components/TextFeedbackComponent';
import { ValueWrapper } from '@/StreamdeckTypes/Received/Feedback/Misc/ValueWrapper';

export const BaseLayoutFeedbackProperties = {
  title: Type.Optional(ValueWrapper(Type.Union([Type.String(), Type.Number()]))),
};

export const IconLayoutFeedbackProperties = {
  ...BaseLayoutFeedbackProperties,
  icon: Type.Optional(ValueWrapper(Type.String())),
};

// GenericLayoutFeedback derives from IconLayoutFeedback as it's the most complete special case. Because `title` and
// `icon` behave oddly (only their `value` may be set), we'll use them as the base for the intersection generic type.
// This isn't great, as not all layouts are guaranteed to have either a title or an icon, but it does provide a safe
// type interface for those specific keys. The keys themselves are optional and IDEs will already ignore those types
// for hinting if something more specific is available (or specified) so this is *probably* fine.

export const GenericLayoutFeedback = Type.Object(IconLayoutFeedbackProperties, {
  additionalProperties: Type.Union([
    WrappedBarFeedbackComponent,
    WrappedGrooveBarFeedbackComponent,
    WrappedPixmapFeedbackComponent,
    PlaccardFeedbackComponent,
    WrappedTextFeedbackComponent,
  ]),
});
export type GenericLayoutFeedback = Static<typeof GenericLayoutFeedback>;
