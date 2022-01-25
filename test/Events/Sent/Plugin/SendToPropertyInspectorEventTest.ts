import 'mocha';

import { expect, use } from 'chai';
import jsonschema from 'chai-json-schema';

import SendToPropertyInspectorEvent from '@/Events/Sent/Plugin/SendToPropertyInspectorEvent';
import { SendToPropertyInspectorType } from '@/StreamdeckTypes/Received';

use(jsonschema);

describe('SendToPropertyInspectorEventTest test', () => {
  it('validates the event against the json schema', () => {
    const event = new SendToPropertyInspectorEvent('action', 'context', { foo: 'bar' });
    expect(JSON.parse(JSON.stringify(event))).to.be.jsonSchema(SendToPropertyInspectorType);
  });
  it('returns the right values for the event', () => {
    const event = new SendToPropertyInspectorEvent('action', 'context', { foo: 'bar' });
    expect(JSON.parse(JSON.stringify(event)).context).to.equal('context');
    expect(JSON.parse(JSON.stringify(event)).payload.foo).to.equal('bar');
  });
});
