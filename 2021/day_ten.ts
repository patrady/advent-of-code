export default class DayTen {
  lines: SyntaxLine[];

  constructor(input: string) {
    this.lines = input
      .split("\n")
      .map(
        (line) =>
          new SyntaxLine(
            line.split("").map((character) => new Symbol(character))
          )
      );
  }

  partOne() {
    const corruptedLines = this.lines.filter((line) => line.isCorrupted());

    return corruptedLines.reduceRight(
      (sum, line) => sum + line.corruptedValue(),
      0
    );
  }

  partTwo() {}
}

const SYNTAX_VALUES = {
  ")": 3,
  "]": 57,
  "}": 1197,
  ">": 25137,
};

class SyntaxLine {
  private _corruptedToken: Symbol = undefined;
  private _isIncomplete = false;

  constructor(public line: Symbol[]) {
    this.validate();
  }

  public isValid() {
    return !this.isIncomplete() && !this.isCorrupted();
  }

  public isIncomplete() {
    return this._isIncomplete;
  }

  public isCorrupted() {
    return this._corruptedToken !== undefined;
  }

  public corruptedValue() {
    if (!this.isCorrupted()) {
      return 0;
    }

    return SYNTAX_VALUES[this._corruptedToken.character];
  }

  private validate() {
    const stack = [];

    for (let symbol of this.line) {
      if (symbol.isOpener()) {
        stack.push(symbol);
      } else {
        const openingSymbol = stack.pop();
        if (!openingSymbol) {
          this._isIncomplete = true;
          break;
        }
        if (!openingSymbol.complements(symbol)) {
          this._corruptedToken = symbol;
          break;
        }
      }
    }
  }
}

class Symbol {
  constructor(public character: string) {}

  isOpener() {
    return ["(", "[", "{", "<"].includes(this.character);
  }

  isCloser() {
    return [")", "]", "}", ">"].includes(this.character);
  }

  complements(symbol: Symbol) {
    switch (this.character) {
      case "(":
        return symbol.character === ")";
      case "[":
        return symbol.character === "]";
      case "{":
        return symbol.character === "}";
      case "<":
        return symbol.character === ">";
    }
  }
}
