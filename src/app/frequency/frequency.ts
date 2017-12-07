export class Frequency {
  id: number;
  name: string;
  provincia: string;
  total: number;
  permileage: string;
  name_id: number;
  genre: number;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
