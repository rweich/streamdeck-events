import 'mocha';

import { expect, use } from 'chai';

import LogMessageEvent from '../../../src/outgoing/LogMessageEvent';
import { LogMessageSchema } from '../types';
import jsonschema from 'chai-json-schema';

use(jsonschema);

describe('LogMessageEvent test', () => {
  it('validates the event against the json schema', () => {
    const event = new LogMessageEvent('new title');
    expect(JSON.parse(JSON.stringify(event))).to.be.jsonSchema(LogMessageSchema);
  });
  it('returns the right values for the event', () => {
    const event = new LogMessageEvent('new title');
    expect(JSON.parse(JSON.stringify(event)).payload.message).to.equal('new title');
  });
});
