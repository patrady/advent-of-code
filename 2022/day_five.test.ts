import { partOne } from "./day_five";

const sampleCrates = [["N", "Z"], ["D", "C", "M"], ["P"]];

const sampleInput = `move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`;

const realInput = ``;

describe("Day Four", () => {
  describe("Part 1", () => {
    it("returns the answer", () => {
      expect(partOne(sampleCrates, sampleInput)).toEqual("CMZ");
    });
  });
});
