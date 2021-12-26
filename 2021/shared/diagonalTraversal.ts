import Traversal, { TraversalPoint } from "./traversal";

export default class DiagonalTraversal<T extends TraversalPoint> extends Traversal<T> {
  public adjacents(): T[] {
    return [
      this.left(),
      this.topLeft(),
      this.top(),
      this.topRight(),
      this.right(),
      this.bottomRight(),
      this.bottom(),
      this.bottomLeft(),
    ].filter((val) => val !== undefined);
  }

  public hasTopLeft() {
    return this.hasTop() && this.hasLeft();
  }

  public topLeft(): T | undefined {
    if (!this.hasTopLeft()) {
      return undefined;
    }

    return this.grid[this.point.row - 1][this.point.col - 1];
  }

  public hasTopRight() {
    return this.hasTop() && this.hasRight();
  }

  public topRight(): T | undefined {
    if (!this.hasTopRight()) {
      return undefined;
    }

    return this.grid[this.point.row - 1][this.point.col + 1];
  }

  public hasBottomLeft() {
    return this.hasBottom() && this.hasLeft();
  }

  public bottomLeft(): T | undefined {
    if (!this.hasBottomLeft()) {
      return undefined;
    }

    return this.grid[this.point.row + 1][this.point.col - 1];
  }

  public hasBottomRight() {
    return this.hasBottom() && this.hasRight();
  }

  public bottomRight(): T | undefined {
    if (!this.hasBottomRight()) {
      return undefined;
    }

    return this.grid[this.point.row + 1][this.point.col + 1];
  }
}
