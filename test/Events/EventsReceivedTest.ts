import 'mocha';

import { expect, use } from 'chai';
import jsonschema from 'chai-json-schema';

import { KeyUpEvent } from '@/Events/Received/Plugin';
import { EventsReceived } from '@/index';

import eventKeyup from './Received/fixtures/keyUpEvent.valid.json';

use(jsonschema);

describe('EventsReceived test', () => {
  it('should return a keyup event', () => {
    expect(new EventsReceived().createFromPayload(eventKeyup)).to.be.instanceOf(KeyUpEvent);
  });
});
