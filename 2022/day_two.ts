export class DayTwo {
  public static parsePart1(input: string): DayTwo {
    const matches = input.split("\n").map((line) => {
      const [opponent, me] = line.split(" ");

      return new Match(Option.for(opponent), Option.for(me));
    });

    return new DayTwo(matches);
  }

  public static parsePart2(input: string): DayTwo {
    const matches = input.split("\n").map((line) => {
      const [opponent, outcome] = line.split(" ");

      return new Match(Option.for(opponent), null);
    });

    return new DayTwo(matches);
  }

  constructor(public matches: Match[]) {}

  public partOne() {
    return this.matches.reduce((sum, match) => sum + match.play(), 0);
  }

  public partTwo() {}
}

class Match {
  static WIN = 6;
  static TIE = 3;
  static LOSS = 0;

  constructor(public opponent: Option, public me: Option) {}

  public play(): number {
    return this.me.value + this.getResult();
  }

  private getResult() {
    if (this.me.beats(this.opponent)) {
      return Match.WIN;
    }
    if (this.me.ties(this.opponent)) {
      return Match.TIE;
    }

    return Match.LOSS;
  }
}

class Option {
  static ROUND_ROBIN = [
    Option.Scissors(),
    Option.Rock(), // 1
    Option.Paper(), // 2
    Option.Scissors(), // 3
    Option.Rock(),
  ];

  static for(value: string) {
    switch (value) {
      case "A":
      case "X":
        return this.Rock();
      case "B":
      case "Y":
        return this.Paper();
      case "C":
      case "Z":
        return this.Scissors();
      default:
        return this.Rock();
    }
  }

  static Rock() {
    return new Option(1, 1);
  }

  static Paper() {
    return new Option(2, 2);
  }

  static Scissors() {
    return new Option(3, 3);
  }

  constructor(public value: number, private index: number) {}

  public beats(option: Option) {
    return this.getBeats().equals(option);
  }

  public ties(option: Option) {
    return this.equals(option);
  }

  public equals(option: Option) {
    return this.value === option.value;
  }

  private getBeats() {
    return Option.ROUND_ROBIN[this.index - 1];
  }

  private getLoses() {
    return Option.ROUND_ROBIN[this.index + 1];
  }
}
