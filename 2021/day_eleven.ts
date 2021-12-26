import { DiagonalTraversal, Point } from "./shared";

type Floor = Point<Octopus>[][];

export default class DayEleven {
  floor: Floor;

  constructor(input: string) {
    this.floor = input
      .split("\n")
      .map((line, row) =>
        line
          .split("")
          .map(
            (energyLevel, col) =>
              new Point(row, col, new Octopus(parseInt(energyLevel)))
          )
      );
  }

  partOne(iterations: number) {
    return new Cave(this.floor).navigate(iterations).getFlashes();
  }

  partTwo() {}
}

class Cave {
  private _numberOfFlashes = 0;

  constructor(public floor: Floor) {}

  navigate(iterations: number) {
    for (let iteration = 0; iteration < iterations; iteration += 1) {
      this.iterateOverFloor((point) => point.value.resetFlash());
      this.iterateOverFloor(point => this.triggerSpot(point));
    }

    return this;
  }

  getFlashes() {
    return this._numberOfFlashes;
  }

  private iterateOverFloor(hook: (point: Point<Octopus>) => void) {
    for (let row = 0; row < this.floor.length; row += 1) {
      for (let col = 0; col < this.floor[row].length; col += 1) {
        const point = this.floor[row][col];
        hook(point);
      }
    }
  }

  private triggerSpot(point: Point<Octopus>) {
    if (point.value.hasFlashed()) {
      return;
    }

    point.value.gainEnergy();

    if (point.value.isReadyToFlash()) {
      point.value.flash();
      this.incrementFlashes();

      new DiagonalTraversal(this.floor, point)
        .adjacents()
        .forEach((adjacent) => this.triggerSpot(adjacent));
    }
  }

  private incrementFlashes() {
    this._numberOfFlashes += 1;
  }

  private printFloor() {
    console.log(
      this.floor
        .map((row) => row.map((col) => col.value.energy).join(""))
        .join("\n")
    );
  }
}

class Octopus {
  private _hasFlashed = false;

  constructor(public energy: number) {}

  hasFlashed(): boolean {
    return this._hasFlashed;
  }

  gainEnergy() {
    if (this.hasFlashed()) {
      return;
    }

    this.energy += 1;
  }

  isReadyToFlash() {
    return this.energy === 10;
  }

  flash() {
    this.energy = 0;
    this._hasFlashed = true;
  }

  resetFlash() {
    this._hasFlashed = false;
  }
}
