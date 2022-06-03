import { CountCharPipe } from './count-char.pipe';

describe('CountCharPipe', () => {
  it('create an instance', () => {
    const pipe = new CountCharPipe();
    expect(pipe).toBeTruthy();
  });
});
