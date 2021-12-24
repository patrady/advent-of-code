export default class DaySeven {
  positions: number[];

  constructor(input: string) {
      this.positions = input.split(',').map(i => parseInt(i));
  }

  partOne() {
    const min = Math.min(...this.positions);
    const max = Math.max(...this.positions);

    return new FuelCost(this.positions).optimize(min, max);
  }

  partTwo() {}
}

class FuelCost {
  positions: number[];

  constructor(positions: number[]) {
    this.positions = positions;
  }

  public optimize(min: number, max: number) {
    let fuelCost = Number.POSITIVE_INFINITY;

    for (let i = min; i <= max; i += 1) {
      const value = this.calculate(i);
      
      if (value < fuelCost) {
        fuelCost = value;
      }
    }

    return fuelCost;
  }

  public calculate(center: number) {
    return this.positions.reduceRight(
      (cost, position) => cost + Math.abs(position - center),
      0
    );
  }
}
