export default class DayFour {
  numbers: number[];
  boards: Board[] = [];

  constructor(input: string) {
    const [firstLine, ...lines] = input.split("\n");

    this.numbers = firstLine.split(",").map((n) => parseInt(n));
    const boardLines = lines.filter(Boolean);
    for (let i = 0; i < boardLines.length; i += Board.ROWS) {
      this.boards.push(new Board(boardLines.slice(i, i + Board.ROWS)));
    }
  }

  partOne() {
    const bingo = new Bingo(this.numbers, this.boards);
    bingo.play();

    return bingo.winner.total();
  }

  partTwo() {
    const bingo = new Bingo(this.numbers, this.boards);
    bingo.play();

    return bingo.lastWinner.total();
  }
}

class Bingo {
  boards: Board[];
  rounds: number[];
  round: number = 0;
  private winners: Board[] = [];

  constructor(rounds: number[], boards: Board[]) {
    this.rounds = rounds;
    this.boards = boards;
  }

  play() {
    do {
      this.boards.forEach((board) => board.mark(this.value));

      this.nextRound();
    } while (!this.isOver());
  }

  nextRound() {
    this.calculateWinners();
    this.round += 1;
  }

  isOver() {
    return this.round >= this.rounds.length;
  }

  get value() {
    return this.rounds[this.round];
  }

  get winner() {
    return this.winners[0];
  }

  get lastWinner() {
    return this.winners[this.winners.length - 1];
  }

  private calculateWinners() {
    const roundWinners = this.boards.filter(
      (b) => !b.hasAlreadyWon() && b.isWinner()
    );
    roundWinners.forEach((winner) => winner.awardPrize(this.value));
    this.winners.push(...roundWinners);
  }
}

class Board {
  static readonly COLUMNS = 5;
  static readonly ROWS = 5;
  rows: Square[][] = [];
  private squaresMap: { [number: number]: [row: number, column: number] } = {};
  private roundValue = -1;

  constructor(input: string[]) {
    input.forEach((line) => {
      this.rows.push(
        line
          .split(" ")
          .filter((n) => n !== "")
          .map((n) => new Square(parseInt(n)))
      );
    });

    // Create the hashmap
    this.rows.forEach((row, i) =>
      row.forEach(
        (boardNumber, j) => (this.squaresMap[boardNumber.value] = [i, j])
      )
    );
  }

  mark(number: number) {
    if (!this.hasAlreadyWon() && this.has(number)) {
      const [row, column] = this.squaresMap[number];
      this.rows[row][column].isMarked = true;
    }
  }

  isWinner() {
    return this.hasAlreadyWon() || this.isRowWinner() || this.isColumnWinner();
  }

  awardPrize(roundValue: number) {
    this.roundValue = roundValue;
  }

  hasAlreadyWon() {
    return this.roundValue !== -1;
  }

  total() {
    return this.unMarkedSum() * this.roundValue;
  }

  private has(number: number) {
    return this.squaresMap[number] !== undefined;
  }

  private unMarkedSum() {
    return this.rows
      .reduce<number[]>(
        (arr, row) => [
          ...arr,
          ...row.filter((n) => !n.isMarked).map((n) => n.value),
        ],
        []
      )
      .reduce((sum, number) => sum + number, 0);
  }

  private isRowWinner() {
    return this.rows.some((row) => row.every((n) => n.isMarked));
  }

  private isColumnWinner() {
    for (let i = 0; i < Board.COLUMNS; i += 1) {
      for (let j = 0; j < Board.ROWS; j += 1) {
        if (!this.rows[j][i].isMarked) {
          break;
        }

        if (j + 1 === Board.ROWS) {
          return true;
        }
      }
    }

    return false;
  }
}

class Square {
  value: number;
  isMarked: boolean;

  constructor(number: number) {
    this.value = number;
    this.isMarked = false;
  }
}
