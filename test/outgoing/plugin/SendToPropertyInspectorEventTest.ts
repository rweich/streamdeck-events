import 'mocha';

import { expect, use } from 'chai';

import SendToPropertyInspectorEvent from '../../../src/outgoing/plugin/SendToPropertyInspectorEvent';
import { SendToPropertyInspectorSchema } from '../types';
import jsonschema from 'chai-json-schema';

use(jsonschema);

describe('SendToPropertyInspectorEventTest test', () => {
  it('validates the event against the json schema', () => {
    const event = new SendToPropertyInspectorEvent('action', 'context', { foo: 'bar' });
    expect(JSON.parse(JSON.stringify(event))).to.be.jsonSchema(SendToPropertyInspectorSchema);
  });
  it('returns the right values for the event', () => {
    const event = new SendToPropertyInspectorEvent('action', 'context', { foo: 'bar' });
    expect(JSON.parse(JSON.stringify(event)).context).to.equal('context');
    expect(JSON.parse(JSON.stringify(event)).payload.foo).to.equal('bar');
  });
});
