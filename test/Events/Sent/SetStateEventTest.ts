import 'mocha';

import { expect, use } from 'chai';

import SetStateEvent from '@/Events/Sent/SetStateEvent';
import { SetStateType } from '@/StreamdeckTypes/Received';
import jsonschema from 'chai-json-schema';

use(jsonschema);

describe('SetStateEventTest test', () => {
  it('validates the event against the json schema', () => {
    const event = new SetStateEvent(1, 'context');
    expect(JSON.parse(JSON.stringify(event))).to.be.jsonSchema(SetStateType);
  });
  it('returns the right values for the event', () => {
    const event = new SetStateEvent(1, 'context');
    expect(JSON.parse(JSON.stringify(event)).context).to.equal('context');
    expect(JSON.parse(JSON.stringify(event)).payload.state).to.equal(1);
  });
});
