export type TraversalPoint = {
  row: number;
  col: number;
};

export default class Traversal<T extends TraversalPoint> {
  constructor(public grid: T[][], public point: TraversalPoint) {}

  public adjacents(): T[] {
    return [this.top(), this.bottom(), this.left(), this.right()].filter(
      (val) => val !== undefined
    );
  }

  public hasLeft() {
    return this.point.col > 0;
  }

  public left(): T | undefined {
    if (!this.hasLeft()) {
      return undefined;
    }

    return this.grid[this.point.row][this.point.col - 1];
  }

  public hasRight() {
    return this.point.col < this.grid[this.point.row].length - 1;
  }

  public right(): T | undefined {
    if (!this.hasRight()) {
      return undefined;
    }

    return this.grid[this.point.row][this.point.col + 1];
  }

  public hasBottom() {
    return this.point.row < this.grid.length - 1;
  }

  public bottom(): T | undefined {
    if (!this.hasBottom()) {
      return undefined;
    }

    return this.grid[this.point.row + 1][this.point.col];
  }

  public hasTop() {
    return this.point.row > 0;
  }

  public top(): T | undefined {
    if (!this.hasTop()) {
      return undefined;
    }

    return this.grid[this.point.row - 1][this.point.col];
  }
}
