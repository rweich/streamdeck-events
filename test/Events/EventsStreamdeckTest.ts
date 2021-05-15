import 'mocha';

import { expect, use } from 'chai';

import { EventsStreamdeck } from '@/index';
import { ShowOkEvent } from '@/Events/Streamdeck/Received';
import { WillAppearType } from '@/StreamdeckTypes/Sent';
import eventShowOk from './Streamdeck/Received/fixtures/showOkEvent.valid.json';
import jsonschema from 'chai-json-schema';

use(jsonschema);

describe('EventsStreamdeck test', () => {
  it('creates the showOk event from payload', () => {
    expect(new EventsStreamdeck().createFromPayload(eventShowOk)).to.be.instanceOf(ShowOkEvent);
  });

  it('creates the willappear event', () => {
    const event = new EventsStreamdeck().willAppear('action', 'context');
    expect(JSON.parse(JSON.stringify(event))).to.be.jsonSchema(WillAppearType);
  });
});
