export default class DaySix {
  fish: Lanternfish[];

  constructor(input: string) {
    this.fish = input
      .split(",")
      .map((timer) => new AdultLanternfish(parseInt(timer)));
  }

  partOne() {
    const school = new School(this.fish);

    return school.simulate(80);
  }

  partTwo() {
    const school = new School(this.fish);

    return school.simulate(256);
  }
}

type Timer = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

class School {
  fish: { [timer in Timer]: number } = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
  };

  constructor(fish: Lanternfish[]) {
    fish.forEach((f) => {
      this.fish[f.timer] += 1;
    });
  }

  simulate(days: number) {
    for (let i = 0; i < days; i += 1) {
      Object.entries(this.fish).forEach(([_day, value]) => {
        const day = parseInt(_day);
        this.fish[day] -= value;
        if (day === 0) {
          this.fish[BabyLanternfish.timer] += value;
          this.fish[AdultLanternfish.timer] += value;
        } else {
          this.fish[day - 1] += value;
        }
      });
    }

    return Object.values(this.fish).reduceRight(
      (total, value) => total + value,
      0
    );
  }
}

abstract class Lanternfish {
  timer: number;

  constructor(timer: number) {
    this.timer = timer;
  }
}

class AdultLanternfish extends Lanternfish {
  static timer = 6;
}

class BabyLanternfish extends Lanternfish {
  static timer = 8;
}
