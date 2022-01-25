import 'mocha';

import { expect, use } from 'chai';
import jsonschema from 'chai-json-schema';

import ShowOkEvent from '@/Events/Sent/ShowOkEvent';
import { ShowOkType } from '@/StreamdeckTypes/Received';

use(jsonschema);

describe('ShowOkEventTest test', () => {
  it('validates the event against the json schema', () => {
    const event = new ShowOkEvent('context');
    expect(JSON.parse(JSON.stringify(event))).to.be.jsonSchema(ShowOkType);
  });
  it('returns the right values for the event', () => {
    const event = new ShowOkEvent('okcontext');
    expect(JSON.parse(JSON.stringify(event)).context).to.equal('okcontext');
  });
});
