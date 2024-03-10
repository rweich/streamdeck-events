import 'mocha';

import { expect } from 'chai';

import TimerUpdateEvent from '@/Events/Received/Plugin/TimerUpdateEvent';

describe('TimerUpdateEvent test', () => {
  it('should return the correct event name', function () {
    const event = new TimerUpdateEvent();
    expect(event.event).to.equal('timerUpdate');
  });
});
