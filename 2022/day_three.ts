export class DayThree {
  public rucksacks: Rucksack[];

  private static parse(input: string): Rucksack[] {
    return input
      .split("\n")
      .map(
        (line) => new Rucksack(line.split("").map((letter) => new Item(letter)))
      );
  }

  constructor(input: string) {
    this.rucksacks = DayThree.parse(input);
  }

  public partOne(): number {
    return this.rucksacks
      .map((rucksack) =>
        DayThree.getDuplicatedItem(
          rucksack.compartment1(),
          rucksack.compartment2(),
        )
      )
      .reduce((sum, item) => sum + item.getPriority(), 0);
  }

  public partTwo(): number {
    const items: Item[] = [];

    for (let i = 0; i < this.rucksacks.length; i += 3) {
      items.push(
        DayThree.getDuplicatedItem(
          ...this.rucksacks.slice(i, i + 3).map((rucksack) => rucksack.items)
        )
      );
    }

    return items.reduce((sum, item) => sum + item.getPriority(), 0);
  }

  public static getDuplicatedItem(...groups: Array<Item[]>): Item {
    const map: { [letter: string]: number } = {};

    groups.forEach((group) => {
      const entries: string[] = [];

      group.forEach((item) => {
        if (entries.includes(item.value)) {
          return;
        }

        if (!map[item.value]) {
          map[item.value] = 1;
        } else {
          map[item.value]++;
        }

        entries.push(item.value);
      });
    });

    const duplicate = Object.entries(map).find(
      ([_key, count]) => count === groups.length
    )?.[0]!;
    return new Item(duplicate);
  }
}

export class Rucksack {
  constructor(public items: Item[]) {}

  public compartment1() {
    return this.items.slice(0, this.items.length / 2);
  }

  public compartment2() {
    return this.items.slice(this.items.length / 2);
  }
}

export class Item {
  constructor(public value: string) {}

  public getPriority() {
    if (this.isUppercase()) {
      return this.value.charCodeAt(0) - "A".charCodeAt(0) + 1 + 26;
    }

    return this.value.charCodeAt(0) - "a".charCodeAt(0) + 1;
  }

  private isUppercase() {
    return this.value === this.value.toUpperCase();
  }
}
