import DayTwelve from "./day_twelve";

const sampleInput1 = `start-A
start-b
A-c
A-b
b-d
A-end
b-end`;

const sampleInput2 = `dc-end
HN-start
start-kj
dc-start
dc-HN
LN-dc
HN-end
kj-sa
kj-HN
kj-dc`;

const sampleInput3 = `fs-end
he-DX
fs-he
start-DX
pj-DX
end-zg
zg-sl
zg-pj
pj-he
RW-he
fs-DX
pj-RW
zg-RW
start-pj
he-WI
zg-he
pj-fs
start-RW`;

const realInput = ``;

describe("DayTwelve", () => {
  describe("part one", () => {
    it("works with sample input1", () => {
      const program = new DayTwelve(sampleInput1);

      expect(program.partOne()).toEqual(10);
    });

    xit("works with sample input2", () => {
      const program = new DayTwelve(sampleInput2);

      expect(program.partOne()).toEqual(19);
    });

    xit("works with sample input3", () => {
      const program = new DayTwelve(sampleInput3);

      expect(program.partOne()).toEqual(226);
    });

    xit("works with real input", () => {
      const program = new DayTwelve(realInput);

      expect(program.partOne()).toEqual(8136);
    });
  });

  describe("partTwo", () => {
    xit("works with the sample input", () => {
      const program = new DayTwelve(sampleInput1);

      expect(program.partTwo()).toEqual(1924);
    });

    xit("works with the real input", () => {
      const program = new DayTwelve(realInput);

      expect(program.partTwo()).toEqual(12738);
    });
  });
});
