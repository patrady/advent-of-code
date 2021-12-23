export default class DaySix {
  fish: Lanternfish[];

  constructor(input: string) {
    this.fish = input
      .split(",")
      .map((timer) => new Lanternfish(parseInt(timer)));
  }

  partOne() {
    const school = new School(this.fish);

    school.simulate(80);
    return school.fish.length;
  }

  partTwo() {}
}

class School {
  fish: Lanternfish[];

  constructor(fish: Lanternfish[]) {
    this.fish = fish;
  }

  simulate(days: number) {
    for (let i = 0; i < days; i += 1) {
      this.fish.push(
        ...this.fish.reduce<Lanternfish[]>((newSchoolOfFish, fish) => {
          const newFish = fish.nextDay();
          if (newFish) {
            newSchoolOfFish.push(newFish);
          }

          return newSchoolOfFish;
        }, [])
      );
    }
  }
}

class Lanternfish {
  timer: number;
  static ADULT_TIMER = 6;
  static BABY_TIMER = 8;

  constructor(timer: number = Lanternfish.BABY_TIMER) {
    this.timer = timer;
  }

  nextDay(): Lanternfish | undefined {
    if (this.timer === 0) {
      return this.reproduce();
    }

    this.timer -= 1;
  }

  reproduce() {
    this.timer = Lanternfish.ADULT_TIMER;

    return new Lanternfish();
  }
}
