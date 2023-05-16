import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints = 99;
  static count = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf.count += 1;
  }

  static createdRacesInstances(): number {
    return this.count;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}