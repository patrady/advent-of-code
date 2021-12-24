export default class DayEight {
  segments: Segment[];

  constructor(input: string) {
    this.segments = input.split("\n").map((line) => {
      const [inputs, outputs] = line.split(" | ");
      return new Segment(inputs.split(" "), outputs.split(" "));
    });
  }

  partOne() {
    return this.segments.reduce<number>(
      (sum, segment) =>
        sum +
        segment.outputs
          .reduce<Display[]>((arr, output) => [...arr, Display.for(output)], [])
          .filter(Boolean).length,
      0
    );
  }

  partTwo() {}
}

class Segment {
  inputs: string[];
  outputs: string[];

  constructor(inputs: string[], outputs: string[]) {
    this.inputs = inputs;
    this.outputs = outputs;
  }
}

abstract class Display {
  static for(input: string) {
    switch (input.length) {
      case One.characters().length:
        return new One();
      case Four.characters().length:
        return new Four();
      case Seven.characters().length:
        return new Seven();
      case Eight.characters().length:
        return new Eight();
      default:
        return undefined;
    }
  }
}

class Zero extends Display {
  static characters(): string[] {
    return ["e", "d", "a", "b", "c", "g"];
  }
}

class One extends Display {
  static characters(): string[] {
    return ["a", "b"];
  }
}

class Two extends Display {
  static characters(): string[] {
    return ["d", "a", "f", "g", "c"];
  }
}

class Three extends Display {
  static characters(): string[] {
    return ["d", "a", "f", "b", "c"];
  }
}

class Four extends Display {
  static characters(): string[] {
    return ["e", "f", "a", "b"];
  }
}

class Five extends Display {
  static characters(): string[] {
    return ["d", "e", "f", "b", "c"];
  }
}

class Six extends Display {
  static characters(): string[] {
    return ["d", "e", "f", "g", "b", "c"];
  }
}

class Seven extends Display {
  static characters(): string[] {
    return ["d", "a", "b"];
  }
}

class Eight extends Display {
  static characters(): string[] {
    return ["a", "b", "c", "d", "e", "f", "g"];
  }
}

class Nine extends Display {
  static characters(): string[] {
    return ["e", "d", "a", "f", "b", "c"];
  }
}
