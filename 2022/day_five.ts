// What I learned: Using a collection decorator REALLY cleaned up this code
// There was a decent amount of duplication and all of it was operating on Crates.

function parse(input: string) {
  const lines = input.split("\n");

  return lines.map((line) => Instruction.parse(line));
}

class Instruction {
  static parse(input: string) {
    const [_0, count, _1, from, _2, to] = input.split(" ");

    return new Instruction(parseInt(count), parseInt(from), parseInt(to));
  }

  constructor(public count: number, public from: number, public to: number) {}
}
export class Crates {
  constructor(private crates: string[][]) {}

  public get(stack: number, count: number) {
    return this.crates[stack - 1].splice(-1 * count);
  }

  public move(stack: number, crates: string[]) {
    this.crates[stack - 1].push(...crates);
  }

  public getTops() {
    return this.crates.map((stack) => stack[stack.length - 1]).join("");
  }
}

export function partOne(crates: Crates, input: string) {
  const instructions = parse(input);

  instructions.forEach(({ count, from, to }) => {
    crates.move(to, crates.get(from, count).reverse());
  });

  return crates.getTops();
}

export function partTwo(crates: Crates, input: string) {
  const instructions = parse(input);

  instructions.forEach(({ count, from, to }) => {
    crates.move(to, crates.get(from, count));
  });

  return crates.getTops();
}
