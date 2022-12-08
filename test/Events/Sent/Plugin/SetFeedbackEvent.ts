import 'mocha';

import { expect, use } from 'chai';
import jsonschema from 'chai-json-schema';

import { SetFeedbackEvent } from '@/Events/Sent/Plugin';
import { SetFeedbackType } from '@/StreamdeckTypes/Received/SetFeedbackType';

use(jsonschema);

describe('SetFeedbackEvent test', () => {
  const payload = {
    value: {
      color: 'green',
      enabled: true,
      value: '123',
    },
  };

  it('validates a basic feedback layout against the json schema', () => {
    const event = new SetFeedbackEvent(payload, 'context');
    expect(JSON.parse(JSON.stringify(event))).to.be.jsonSchema(SetFeedbackType);
  });
  it('returns the right values for a basic event', () => {
    const event = new SetFeedbackEvent(payload, 'context');
    expect(JSON.parse(JSON.stringify(event)).payload.value.value).to.equal('123');
    expect(JSON.parse(JSON.stringify(event)).payload.value.enabled).to.be.true;
    expect(JSON.parse(JSON.stringify(event)).payload.value.color).to.equal('green');
  });
});
