type Matrix = { [key: string]: Cave[] };

export default class DayTwelve {
  public matrix: Matrix = {};

  constructor(input: string) {
    const addNode = (from: Cave, to: Cave) => {
      if (this.matrix[from.name]) {
        this.matrix[from.name].push(to);
      } else {
        this.matrix[from.name] = [to];
      }
    };

    input.split("\n").forEach((line) => {
      const [begin, end] = line.split("-");
      const from = Cave.for(begin);
      const to = Cave.for(end);

      addNode(from, to);
      if (!from.isStartOrEnd() && !to.isStartOrEnd()) {
        addNode(to, from);
      }
    });
  }

  partOne() {
    return new Explorer(this.matrix).explore().paths.length;
  }

  partTwo() {}
}

class Explorer {
  private _paths: Path[] = [];

  constructor(public matrix: Matrix) {}

  public explore(): Explorer {
    this.matrix[Start.id].forEach((cave) => {
      this.move(cave, new Path());
      console.log(
        "paths found",
        this._paths.map((p) => p.toString())
      );
    });

    return this;
  }

  public get paths() {
    return this._paths.filter((p) => p.isValid());
  }

  private move(cave: Cave, path: Path) {
    if (cave.isVisited()) {
      this._paths.push(path);
      return;
    }

    path.add(cave);
    const nextCaves = this.matrix[cave.name];

    if (!nextCaves) {
      this._paths.push(path);
      return;
    }

    nextCaves
      .filter((c) => path.canAdd(c))
      .forEach((nextCave) => {
        this.move(nextCave, path.copy());
      });
  }
}

class Path {
  constructor(public caves: Cave[] = [new Start()]) {}

  add(cave: Cave) {
    cave.visit();
    this.caves.push(cave);
  }

  canAdd(cave: Cave) {
    const caveInPath = this.caves.find((c) => c.name === cave.name);
    if (!caveInPath) {
      return true;
    }

    return caveInPath.canVisit();
  }

  isValid() {
    return this.caves[this.caves.length - 1].isEnd();
  }

  copy() {
    return new Path(this.caves);
  }

  toString() {
    return this.caves.map((cave) => cave.name).join(",");
  }
}

abstract class Cave {
  private isTouched = false;

  constructor(public name: string) {}

  static for(name: string) {
    switch (name) {
      case Start.id:
        return new Start();
      case End.id:
        return new End();
      case name.toUpperCase():
        return new BigCave(name);
      default:
        return new SmallCave(name);
    }
  }

  canVisit() {
    return !this.isVisited() && !this.isStartOrEnd();
  }

  isVisited() {
    return this.isTouched && this.canVisitOnlyOnce();
  }

  visit() {
    this.isTouched = true;
  }

  canVisitOnlyOnce() {
    return true;
  }

  isStartOrEnd() {
    return this.isStart() || this.isEnd();
  }

  isEnd() {
    return false;
  }

  isStart() {
    return false;
  }
}

class BigCave extends Cave {
  canVisitOnlyOnce() {
    return false;
  }
}

class SmallCave extends Cave {}

class Start extends Cave {
  static id = "start";

  constructor() {
    super(Start.id);
  }

  isStart(): boolean {
    return true;
  }
}

class End extends Cave {
  static id = "end";

  constructor() {
    super(End.id);
  }

  isEnd(): boolean {
    return true;
  }
}
