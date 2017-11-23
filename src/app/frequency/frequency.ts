export class Name {
  id: number;
  name: string;
  genre: number;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
