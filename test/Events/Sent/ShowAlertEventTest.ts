import 'mocha';

import { expect, use } from 'chai';

import ShowAlertEvent from '@/Events/Sent/ShowAlertEvent';
import { ShowAlertType } from '@/StreamdeckTypes/Received';
import jsonschema from 'chai-json-schema';

use(jsonschema);

describe('ShowAlertEventTest test', () => {
  it('validates the event against the json schema', () => {
    const event = new ShowAlertEvent('context');
    expect(JSON.parse(JSON.stringify(event))).to.be.jsonSchema(ShowAlertType);
  });
  it('returns the right values for the event', () => {
    const event = new ShowAlertEvent('alertcontext');
    expect(JSON.parse(JSON.stringify(event)).context).to.equal('alertcontext');
  });
});
