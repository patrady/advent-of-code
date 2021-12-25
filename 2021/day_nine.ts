export default class DayNine {
  map: number[][];

  constructor(input: string) {
    this.map = input
      .split("\n")
      .map((line) => line.split("").map((num) => parseInt(num)));
  }

  partOne() {
    const heightMap = new Heightmap(this.map);

    return heightMap.riskLevel();
  }

  partTwo() {}
}

class Heightmap {
  map: number[][];

  constructor(map: number[][]) {
    this.map = map;
  }

  riskLevel(): number {
    const lowPoints = this.lowPoints();

    return lowPoints.reduceRight((sum, num) => sum + (num + 1), 0);
  }

  lowPoints(): number[] {
    const lowPoints = [];

    for (let row = 0; row < this.map.length; row += 1) {
      for (let col = 0; col < this.map[row].length; col += 1) {
        const value = this.map[row][col];
        const adjacents = this.adjacents(row, col);

        if (adjacents.every((num) => value < num)) {
          lowPoints.push(value);
        }
      }
    }

    return lowPoints;
  }

  private adjacents(row: number, col: number) {
    return [
      this.adjacentTop(row, col),
      this.adjacentBottom(row, col),
      this.adjacentLeft(row, col),
      this.adjacentRight(row, col),
    ].filter((val) => val !== undefined);
  }

  private adjacentLeft(row: number, col: number) {
    if (col === 0) {
      return undefined;
    }

    return this.map[row][col - 1];
  }

  private adjacentRight(row: number, col: number) {
    if (col === this.map[row].length - 1) {
      return undefined;
    }

    return this.map[row][col + 1];
  }

  private adjacentBottom(row: number, col: number) {
    if (row === this.map.length - 1) {
      return undefined;
    }

    return this.map[row + 1][col];
  }

  private adjacentTop(row: number, col: number) {
    if (row === 0) {
      return undefined;
    }

    return this.map[row - 1][col];
  }
}
