import 'mocha';

import { expect, use } from 'chai';

import OpenUrlEvent from '@/Events/Sent/OpenUrlEvent';
import { OpenUrlSchema } from './types';
import jsonschema from 'chai-json-schema';

use(jsonschema);

describe('OpenUrlEventTest test', () => {
  it('validates the event against the json schema', () => {
    const event = new OpenUrlEvent('url');
    expect(JSON.parse(JSON.stringify(event))).to.be.jsonSchema(OpenUrlSchema);
  });
  it('returns the right values for the event', () => {
    const event = new OpenUrlEvent('https://example.com');
    expect(JSON.parse(JSON.stringify(event)).payload.url).to.equal('https://example.com');
  });
});
