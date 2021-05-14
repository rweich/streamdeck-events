import 'mocha';

import { expect, use } from 'chai';

import { EventsReceived } from '@/index';
import { KeyUpEvent } from '@/Events/Received/Plugin';
import eventKeyup from './Received/fixtures/keyUpEvent.valid.json';
import jsonschema from 'chai-json-schema';

use(jsonschema);

describe('EventsReceived test', () => {
  it('should return a keyup event', () => {
    expect(new EventsReceived().createFromPayload(eventKeyup)).to.be.instanceOf(KeyUpEvent);
  });
});
