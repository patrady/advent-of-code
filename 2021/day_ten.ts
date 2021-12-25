import { sumBy } from "lodash";

export default class DayTen {
  lines: SyntaxLine[];

  constructor(input: string) {
    this.lines = input
      .split("\n")
      .map(
        (line) =>
          new SyntaxLine(
            line.split("").map((character) => Symbol.for(character))
          )
      );
  }

  partOne() {
    return new Program(this.lines).corruptedValue();
  }

  partTwo() {
    return new Program(this.lines).incompleteValue();
  }
}

class Program {
  constructor(public lines: SyntaxLine[]) {}

  corruptedValue() {
    const lines = this.lines.filter((line) => line.isCorrupted());

    return sumBy(lines, (line) => line.corruptedValue());
  }

  incompleteValue() {
    const lines = this.lines.filter((line) => line.isIncomplete());
    const incompletePoints = lines
      .map((line) => line.incompletePoints())
      .sort((a, b) => a - b);

    return incompletePoints[(incompletePoints.length - 1) / 2];
  }
}

class SyntaxLine {
  private _corruptedToken: Symbol = undefined;
  private _missingSymbols: Symbol[] = [];

  constructor(public line: Symbol[]) {
    this.validate();
  }

  public isIncomplete() {
    return this._missingSymbols.length > 0;
  }

  public isCorrupted() {
    return this._corruptedToken !== undefined;
  }

  public incompletePoints() {
    return this._missingSymbols.reduce(
      (total, symbol) => total * 5 + symbol.incompletePoints,
      0
    );
  }

  public corruptedValue() {
    if (!this.isCorrupted()) {
      return 0;
    }

    return this._corruptedToken.corruptedPoints;
  }

  private validate() {
    const stack: Symbol[] = [];

    for (let symbol of this.line) {
      if (symbol.isOpener()) {
        stack.push(symbol);
      } else {
        const openingSymbol = stack.pop();
        if (!openingSymbol.complements(symbol)) {
          this._corruptedToken = symbol;
          return;
        }
      }
    }

    if (stack.length > 0) {
      this._missingSymbols = [
        ...stack.reverse().map((symbol) => symbol.closer()),
      ];
    }
  }
}

abstract class Symbol {
  constructor(public character: string) {}

  static for(character: string) {
    switch (character) {
      case "(":
      case ")":
        return new Parenthesis(character);
      case "[":
      case "]":
        return new Bracket(character);
      case "{":
      case "}":
        return new CurlyBraces(character);
      case "<":
      case ">":
        return new Caret(character);
    }
  }

  abstract readonly OPENER: string;
  abstract readonly CLOSER: string;
  abstract get incompletePoints(): number;
  abstract get corruptedPoints(): number;
  abstract closer(): Symbol;

  isOpener() {
    return this.character === this.OPENER;
  }

  isCloser() {
    return this.character === this.CLOSER;
  }

  complements(symbol: Symbol) {
    return symbol.character === this.CLOSER;
  }
}

class Parenthesis extends Symbol {
  readonly OPENER = "(";
  readonly CLOSER = ")";

  closer(): Symbol {
    return new Parenthesis(this.CLOSER);
  }

  get incompletePoints() {
    return 1;
  }

  get corruptedPoints(): number {
    return 3;
  }
}

class Bracket extends Symbol {
  readonly OPENER = "[";
  readonly CLOSER = "]";

  closer(): Symbol {
    return new Bracket(this.CLOSER);
  }

  get incompletePoints() {
    return 2;
  }

  get corruptedPoints(): number {
    return 57;
  }
}
class CurlyBraces extends Symbol {
  readonly OPENER = "{";
  readonly CLOSER = "}";

  closer(): Symbol {
    return new CurlyBraces(this.CLOSER);
  }

  get incompletePoints() {
    return 3;
  }

  get corruptedPoints(): number {
    return 1197;
  }
}

class Caret extends Symbol {
  readonly OPENER = "<";
  readonly CLOSER = ">";

  closer(): Symbol {
    return new Caret(this.CLOSER);
  }

  get incompletePoints() {
    return 4;
  }

  get corruptedPoints(): number {
    return 25137;
  }
}
