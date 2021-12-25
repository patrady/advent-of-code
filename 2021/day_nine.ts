import sumBy from "lodash.sumby";

type Map = Point[][];

export default class DayNine {
  map: Map;

  constructor(input: string) {
    this.map = input
      .split("\n")
      .map((line, row) =>
        line.split("").map((num, col) => new Point(row, col, parseInt(num)))
      );
  }

  partOne() {
    const heightMap = new Heightmap(this.map);

    return heightMap.riskLevel();
  }

  partTwo() {
    const heightMap = new Heightmap(this.map);

    return heightMap.largestBasinSizes();
  }
}

class Heightmap {
  constructor(public map: Map) {}

  public riskLevel(): number {
    return sumBy(this.lowPoints(), (point) => point.riskValue());
  }

  public largestBasinSizes(): number {
    const basinSizes = this.basinSizes();

    return basinSizes
      .sort((a, b) => b - a)
      .slice(0, 3)
      .reduceRight((total, size) => total * size, 1);
  }

  private lowPoints(): Point[] {
    const lowPoints: Point[] = [];

    for (let row = 0; row < this.map.length; row += 1) {
      for (let col = 0; col < this.map[row].length; col += 1) {
        const point = this.map[row][col];
        const adjacents = new Traversal(this.map, point).adjacents();

        if (adjacents.every((adjacent) => point.value < adjacent.value)) {
          lowPoints.push(point);
        }
      }
    }

    return lowPoints;
  }

  private basinSizes() {
    return this.lowPoints().reduce<number[]>((sizes, point) => {
      const map = this.copyOfMap();
      return [...sizes, this.basin(map, point)];
    }, []);
  }

  private basin(map: Map, point: Point): number {
    if (!point.isValidBasin()) {
      return 0;
    }

    point.invalidate();

    return (
      1 +
      sumBy(new Traversal(map, point).adjacents(), (adjacent) =>
        this.basin(map, adjacent)
      )
    );
  }

  private copyOfMap() {
    return this.map.map((row) => row.slice());
  }
}

class Traversal {
  constructor(public map: Map, public point: Point) {}

  public adjacents() {
    return [this.top(), this.bottom(), this.left(), this.right()].filter(
      (val) => val !== undefined
    );
  }

  public hasLeft() {
    return this.point.col > 0;
  }

  public left() {
    if (!this.hasLeft()) {
      return undefined;
    }

    return this.map[this.point.row][this.point.col - 1];
  }

  public hasRight() {
    return this.point.col < this.map[this.point.row].length - 1;
  }

  public right() {
    if (!this.hasRight()) {
      return undefined;
    }

    return this.map[this.point.row][this.point.col + 1];
  }

  public hasBottom() {
    return this.point.row < this.map.length - 1;
  }

  public bottom() {
    if (!this.hasBottom()) {
      return undefined;
    }

    return this.map[this.point.row + 1][this.point.col];
  }

  public hasTop() {
    return this.point.row > 0;
  }

  public top() {
    if (!this.hasTop()) {
      return undefined;
    }

    return this.map[this.point.row - 1][this.point.col];
  }
}

class Point {
  constructor(public row: number, public col: number, public value: number) {}

  public riskValue() {
    return this.value + 1;
  }

  public isValidBasin() {
    return this.value !== 9;
  }

  public invalidate() {
    this.value = 9;
  }
}
