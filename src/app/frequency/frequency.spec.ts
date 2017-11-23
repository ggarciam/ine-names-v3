import { Frequency } from './frequency';

describe('Frequency', () => {
  it('should create an instance', () => {
    expect(new Frequency()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    const name = new Frequency({
      name: 'Gonzalo',
      genre: 2
    });
    expect(name.name).toEqual('Gonzalo');
    expect(name.genre).toEqual(2);
  });
});
