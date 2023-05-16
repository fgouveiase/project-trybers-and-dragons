import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints = 80;
  static count = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf.count += 1;
  }

  static createdRacesInstances(): number {
    return this.count;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}