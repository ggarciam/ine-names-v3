export class Frequency {
  id: number;
  name: string;
  provincia: string;
  total: number;
  permileage: string;
  name_id: number;
  genre: 2;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
