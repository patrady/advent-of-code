export default class DayFive {
  vents: Vent[] = [];

  constructor(lines: string) {
    lines.split("\n").forEach((line) => {
      const [start, end] = line.split(" -> ");
      const [x1, y1] = start.split(",");
      const [x2, y2] = end.split(",");

      this.vents.push(
        new Vent(
          new Point(parseInt(x1), parseInt(y1)),
          new Point(parseInt(x2), parseInt(y2))
        )
      );
    });
  }

  partOne() {
    const oceanFloor = new OceanFloor(this.vents);

    oceanFloor.map();
    return oceanFloor.numberOfOverlappingVents();
  }

  partTwo() {}
}

class OceanFloor {
  vents: Vent[];
  grid: number[][] = [];

  constructor(vents: Vent[]) {
    this.vents = vents;

    this.initialze();
  }

  map() {
    this.vents.forEach((vent) => {
      vent.points.forEach((point) => {
        this.grid[point.y][point.x] += 1;
      });
    });
  }

  numberOfOverlappingVents() {
    const [x, y] = this.perimeter;
    let res = 0;

    for (let i = 0; i < x + 1; i += 1) {
      for (let j = 0; j < y + 1; j += 1) {
        if (this.grid[i][j] > 1) {
          res += 1;
        }
      }
    }

    return res;
  }

  get perimeter(): [x: number, y: number] {
    return [
      Math.max(...this.vents.map((v) => v.maxX)),
      Math.max(...this.vents.map((v) => v.maxY)),
    ];
  }

  private initialze() {
    const [x, y] = this.perimeter;

    for (let i = 0; i < y + 1; i += 1) {
      this.grid.push(new Array(x + 1).fill(0));
    }
  }
}

class Vent {
  points: Point[] = [];
  start: Point;
  end: Point;

  constructor(start: Point, end: Point) {
    this.start = start;
    this.end = end;

    this.expand();
  }

  expand() {
    if (!this.isStraight()) {
      return;
    }

    this.points.push(this.start, this.end);

    for (let i = this.minX + 1; i < this.maxX; i += 1) {
      this.points.push(new Point(i, this.start.y));
    }

    for (let i = this.minY + 1; i < this.maxY; i += 1) {
      this.points.push(new Point(this.start.x, i));
    }
  }

  isStraight() {
    return this.isVertical() || this.isHorizontal();
  }

  isVertical() {
    return this.start.y === this.end.y;
  }

  isHorizontal() {
    return this.start.x === this.end.x;
  }

  get maxX() {
    return Math.max(this.start.x, this.end.x);
  }

  get minX() {
    return Math.min(this.start.x, this.end.x);
  }

  get maxY() {
    return Math.max(this.start.y, this.end.y);
  }

  get minY() {
    return Math.min(this.start.y, this.end.y);
  }
}

class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}
