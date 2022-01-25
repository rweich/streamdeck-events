import 'mocha';

import { expect, use } from 'chai';
import jsonschema from 'chai-json-schema';

import LogMessageEvent from '@/Events/Sent/LogMessageEvent';
import { LogMessageType } from '@/StreamdeckTypes/Received';

use(jsonschema);

describe('LogMessageEvent test', () => {
  it('validates the event against the json schema', () => {
    const event = new LogMessageEvent('new title');
    expect(JSON.parse(JSON.stringify(event))).to.be.jsonSchema(LogMessageType);
  });
  it('returns the right values for the event', () => {
    const event = new LogMessageEvent('new title');
    expect(JSON.parse(JSON.stringify(event)).payload.message).to.equal('new title');
  });
});
