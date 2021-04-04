import { Type } from '@sinclair/typebox';

export const ApplicationEventType = Type.Object({
  event: Type.RegEx(/^applicationDidLaunch|applicationDidTerminate$/),
  payload: Type.Object({
    application: Type.String(),
  }),
});
export const ApplicationDidLaunchEventType = Type.Intersect([
  Type.Omit(ApplicationEventType, ['event']),
  Type.Object({
    event: Type.RegEx(/^applicationDidLaunch$/),
  }),
]);
export const ApplicationDidTerminatEventType = Type.Intersect([
  Type.Omit(ApplicationEventType, ['event']),
  Type.Object({
    event: Type.RegEx(/^applicationDidTerminate$/),
  }),
]);
