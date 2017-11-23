import { Name } from './name';

describe('Name', () => {
  it('should create an instance', () => {
    expect(new Name()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    const name = new Name({
      name: 'Gonzalo',
      genre: 2
    });
    expect(name.name).toEqual('Gonzalo');
    expect(name.genre).toEqual(2);
  });
});
