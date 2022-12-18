import 'mocha';

import { expect, use } from 'chai';
import jsonschema from 'chai-json-schema';

import { SetFeedbackLayoutEvent } from '@/Events/Sent/Plugin';
import { SetFeedbackLayoutType } from '@/StreamdeckTypes/Received/SetFeedbackLayoutType';

use(jsonschema);

describe('SetFeedbackLayoutEvent test', () => {
  it('validates a basic feedback layout against the json schema', () => {
    const event = new SetFeedbackLayoutEvent('$A0', 'context');
    expect(JSON.parse(JSON.stringify(event))).to.be.jsonSchema(SetFeedbackLayoutType);
  });
  it('returns the right values for a basic event', () => {
    const event = new SetFeedbackLayoutEvent('$B1', 'context');
    expect(JSON.parse(JSON.stringify(event)).payload.layout).to.equal('$B1');
  });

  it('returns the right values for a custom layout', () => {
    const event = new SetFeedbackLayoutEvent('layouts/progress.json', 'context');
    expect(JSON.parse(JSON.stringify(event)).payload.layout).to.equal('layouts/progress.json');
  });
});
