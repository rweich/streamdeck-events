import 'mocha';

import { expect, use } from 'chai';

import { EventsStreamdeck } from '@/index';
import { WillAppearType } from '@/StreamdeckTypes/Sent';
import jsonschema from 'chai-json-schema';

use(jsonschema);

describe('EventsStreamdeck test', () => {
  it('creates the willappear event', () => {
    const event = new EventsStreamdeck().willAppear('action', 'context');
    expect(JSON.parse(JSON.stringify(event))).to.be.jsonSchema(WillAppearType);
  });
});
