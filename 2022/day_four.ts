export function partOne(input: string) {
  const pairs = parseInput(input);

  return pairs.filter((pair) => pair.isContained()).length;
}

export function partTwo(input: string) {
  const pairs = parseInput(input);

  return pairs.filter((pair) => pair.isOverlap()).length;
}

export function parseInput(input: string): Pair[] {
  return input.split("\n").map((line) => {
    const [first, second] = line.split(",");
    const [start1, end1] = first.split("-");
    const [start2, end2] = second.split("-");

    return new Pair(
      new Section(parseInt(start1), parseInt(end1)),
      new Section(parseInt(start2), parseInt(end2))
    );
  });
}

export class Pair {
  constructor(public section1: Section, public section2: Section) {}

  public isContained() {
    return (
      this.isSubset(this.section1, this.section2) ||
      this.isSubset(this.section2, this.section1)
    );
  }

  public isOverlap() {
    return (
      this.isIntersection(this.section1, this.section2) ||
      this.isIntersection(this.section2, this.section1)
    );
  }

  private isSubset(first: Section, second: Section) {
    return first.start >= second.start && first.end <= second.end;
  }

  private isIntersection(first: Section, second: Section) {
    return first.end >= second.start && first.end <= second.end;
  }
}

export class Section {
  constructor(public start: number, public end: number) {}
}
