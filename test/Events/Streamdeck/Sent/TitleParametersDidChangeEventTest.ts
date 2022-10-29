import 'mocha';

import { expect, use } from 'chai';
import jsonschema from 'chai-json-schema';

import { TitleParametersDidChangeEvent } from '@/Events/Streamdeck/Sent';
import { TitleParametersDidChangeType } from '@/StreamdeckTypes/Sent';

use(jsonschema);

describe('TitleParametersDidChangeEvent test', () => {
  it('validates the event against the json schema', () => {
    const event = new TitleParametersDidChangeEvent('action', 'context');
    expect(JSON.parse(JSON.stringify(event))).to.be.jsonSchema(TitleParametersDidChangeType);
  });
  it('returns the right default values for the event', () => {
    const event = new TitleParametersDidChangeEvent('action312', 'context312');
    const parse: TitleParametersDidChangeType = JSON.parse(JSON.stringify(event));
    expect(parse.action).to.equal('action312');
    expect(parse.context).to.equal('context312');
    expect(parse.event).to.equal('titleParametersDidChange');
    expect(parse.device).to.equal('device');
    expect(parse.payload.coordinates.column).to.equal(1);
    expect(parse.payload.coordinates.row).to.equal(1);
    expect(parse.payload.state).to.equal(0);
    expect(parse.payload.title).to.equal('new title');
    expect(parse.payload.titleParameters.fontFamily).to.equal('');
    expect(parse.payload.titleParameters.fontSize).to.equal(12);
    expect(parse.payload.titleParameters.fontStyle).to.equal('');
    expect(parse.payload.titleParameters.fontUnderline).to.be.false;
    expect(Object.keys(parse.payload.settings)).to.be.of.length(0);
    expect(parse.payload.titleParameters.showTitle).to.be.true;
    expect(parse.payload.titleParameters.titleAlignment).to.equal('middle');
    expect(parse.payload.titleParameters.titleColor).to.equal('#ffffff');
  });
  it('returns the right values for the changed options', () => {
    const event = new TitleParametersDidChangeEvent('action312', 'context312', {
      column: 3,
      device: 'lala',
      fontFamily: 'my family',
      fontSize: 19,
      fontStyle: 'stylish',
      fontUnderline: true,
      row: 4,
      settings: { bar: 'baz', foo: true },
      showTitle: false,
      state: 1,
      title: 'foo',
      titleAlignment: 'top',
      titleColor: '#123123',
    });
    const parse: TitleParametersDidChangeType = JSON.parse(JSON.stringify(event));
    expect(parse.device).to.equal('lala');
    expect(parse.payload.coordinates.column).to.equal(3);
    expect(parse.payload.coordinates.row).to.equal(4);
    expect((parse.payload.settings as Record<string, boolean>).foo).to.be.true;
    expect((parse.payload.settings as Record<string, string>).bar).to.equal('baz');
    expect(parse.payload.state).to.equal(1);
    expect(parse.payload.title).to.equal('foo');
    expect(parse.payload.titleParameters.fontFamily).to.equal('my family');
    expect(parse.payload.titleParameters.fontSize).to.equal(19);
    expect(parse.payload.titleParameters.fontStyle).to.equal('stylish');
    expect(parse.payload.titleParameters.fontUnderline).to.be.true;
    expect(parse.payload.titleParameters.showTitle).to.be.false;
    expect(parse.payload.titleParameters.titleAlignment).to.equal('top');
    expect(parse.payload.titleParameters.titleColor).to.equal('#123123');
  });
});
