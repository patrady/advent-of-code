type Input = number[][];

export class DayOne {
  public static parse(input: string): DayOne {
    const data = input
      .split("\n\n")
      .map((elf) => elf.split("\n").map((calorie) => parseInt(calorie)));

    return new DayOne(data);
  }

  private constructor(public elves: Input) {}

  public partOne() {
    return this.getCaloriesInDescendingOrder()[0];
  }

  public partTwo() {
    return this.sumArray(this.getTopElves(3));
  }

  private getTopElves(limit: number) {
    return this.getCaloriesInDescendingOrder().slice(0, limit);
  }

  private getCaloriesInDescendingOrder() {
    return this.getCalories().sort((a, b) => b - a);
  }

  private getCalories() {
    return this.elves.map((elf) => this.sumArray(elf));
  }

  private sumArray(arr: number[]) {
    return arr.reduceRight((sum, element) => sum + element, 0);
  }
}
