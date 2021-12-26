import DayEleven from './day_eleven';

const sampleInput = `5483143223
2745854711
5264556173
6141336146
6357385478
4167524645
2176841721
6882881134
4846848554
5283751526`;

const realInput = `4112256372
3143253712
4516848631
3783477137
3746723582
5861358884
4843351774
2316447621
6643817745
6366815868`;

describe("DayEleven", () => {
    describe("part one", () => {
      it("works with sample input", () => {
        const program = new DayEleven(sampleInput);
  
        expect(program.partOne(100)).toEqual(1656);
      });
  
      it("works with real input", () => {
        const program = new DayEleven(realInput);
  
        expect(program.partOne(100)).toEqual(1603);
      });
    });
  
    describe("partTwo", () => {
      xit("works with the sample input", () => {
        const program = new DayEleven(sampleInput);
  
        expect(program.partTwo()).toEqual(195);
      });
  
      xit("works with the real input", () => {
        const program = new DayEleven(realInput);
  
        expect(program.partTwo()).toEqual(12738);
      });
    })
  });