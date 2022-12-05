function parse(input: string) {
  const lines = input.split("\n");

  return lines.map((line) => Instruction.parse(line));
}

class Instruction {
  static parse(input: string) {
    const [_0, iterations, _1, from, _2, to] = input.split(" ");

    return new Instruction(parseInt(iterations), parseInt(from), parseInt(to));
  }

  constructor(
    public iterations: number,
    public from: number,
    public to: number
  ) {}
}

export function partOne(crates: string[][], input: string) {
  const instructions = parse(input);

  instructions.forEach(({ iterations, from, to }) => {
    for (let i = 0; i < iterations; i++) {
      const crate = crates[from - 1].pop();
      if (!crate) {
        return;
      }

      crates[to - 1].push(crate);
    }
  });

  return crates.map((crate) => crate.pop()).join("");
}
