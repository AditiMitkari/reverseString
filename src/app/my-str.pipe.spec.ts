import { MyStrPipe } from './my-str.pipe';

describe('MyStrPipe', () => {
  it('create an instance', () => {
    const pipe = new MyStrPipe();
    expect(pipe).toBeTruthy();
  });
});
