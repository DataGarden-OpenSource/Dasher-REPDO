import { CamelCaseFormatterPipe } from './camel-case-formatter.pipe';

describe('CamelCaseFormatterPipe', () => {
  it('create an instance', () => {
    const pipe = new CamelCaseFormatterPipe();
    expect(pipe).toBeTruthy();
  });
});
