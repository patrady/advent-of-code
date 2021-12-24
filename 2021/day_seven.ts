export default class DaySeven {
  positions: number[];

  constructor(input: string) {
    this.positions = input.split(",").map((i) => parseInt(i));
  }

  partOne() {
    return new FuelCost(this.positions).linear().optimize();
  }

  partTwo() {
    return new FuelCost(this.positions).triangular().optimize();
  }
}

class FuelCost {
  public positions: number[];
  private max: number;
  private min: number;
  private strategy: (center: number) => number;

  constructor(positions: number[]) {
    this.positions = positions;
    this.min = Math.min(...positions);
    this.max = Math.max(...positions);

    return this;
  }

  public optimize() {
    let fuelCost = Number.POSITIVE_INFINITY;

    for (let i = this.min; i <= this.max; i += 1) {
      const value = this.strategy(i);

      if (value < fuelCost) {
        fuelCost = value;
      }
    }

    return fuelCost;
  }

  public linear() {
    this.strategy = (center: number) =>
      this.positions.reduceRight(
        (cost, position) => cost + Math.abs(position - center),
        0
      );

    return this;
  }

  public triangular() {
    this.strategy = (center: number) =>
      this.positions.reduceRight((cost, position) => {
        const distance = Math.abs(position - center);
        return cost + (distance * (distance + 1)) / 2;
      }, 0);

    return this;
  }
}
