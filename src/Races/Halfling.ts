import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints = 60;
  static count = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling.count += 1;
  }

  static createdRacesInstances(): number {
    return this.count;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}