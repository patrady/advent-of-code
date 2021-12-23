import DaySix from "./day_six";

const sampleInput = `3,4,3,1,2`;

const realInput = `1,4,1,1,1,1,5,1,1,5,1,4,2,5,1,2,3,1,1,1,1,5,4,2,1,1,3,1,1,1,1,1,1,1,2,1,1,1,1,1,5,1,1,1,1,1,1,1,1,1,4,1,1,1,1,5,1,4,1,1,4,1,1,1,1,4,1,1,5,5,1,1,1,4,1,1,1,1,1,3,2,1,1,1,1,1,2,3,1,1,2,1,1,1,3,1,1,1,2,1,2,1,1,2,1,1,3,1,1,1,3,3,5,1,4,1,1,5,1,1,4,1,5,3,3,5,1,1,1,4,1,1,1,1,1,1,5,5,1,1,4,1,2,1,1,1,1,2,2,2,1,1,2,2,4,1,1,1,1,3,1,2,3,4,1,1,1,4,4,1,1,1,1,1,1,1,4,2,5,2,1,1,4,1,1,5,1,1,5,1,5,5,1,3,5,1,1,5,1,1,2,2,1,1,1,1,1,1,1,4,3,1,1,4,1,4,1,1,1,1,4,1,4,4,4,3,1,1,3,2,1,1,1,1,1,1,1,4,1,3,1,1,1,1,1,1,1,5,2,4,2,1,4,4,1,5,1,1,3,1,3,1,1,1,1,1,4,2,3,2,1,1,2,1,5,2,1,1,4,1,4,1,1,1,4,4,1,1,1,1,1,1,4,1,1,1,2,1,1,2`;


describe("DaySix", () => {
  describe("partOne", () => {
    it("works with sample input", () => {
      const program = new DaySix(sampleInput);

      expect(program.partOne()).toEqual(5934);
    });

    it("works with real input", () => {
      const program = new DaySix(realInput);

      expect(program.partOne()).toEqual(385391);
    });
  });

  describe("partTwo", () => {
    xit("works with sample input", () => {
      const program = new DaySix(sampleInput);

      expect(program.partTwo()).toEqual(12);
    });

    xit("works with real input", () => {
      const program = new DaySix(realInput);

      expect(program.partTwo()).toEqual(4655);
    });
  });
});
