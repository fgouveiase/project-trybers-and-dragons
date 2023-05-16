import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints = 74;
  static count = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc.count += 1;
  }

  static createdRacesInstances(): number {
    return this.count;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}