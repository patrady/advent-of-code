export function partOne(input: string[]) {
  return findUniqueSubset(input, 4);
}

export function partTwo(input: string[]) {
  return findUniqueSubset(input, 14);
}

function findUniqueSubset(input: string[], length: number) {
  for (let i = 0; i < input.length - length; i++) {
    if (isUnique(input.slice(i, i + length))) {
      return i + length;
    }
  }

  return -1;
}

function isUnique(input: string[]): boolean {
  let isDuplicated = false;

  input.forEach((letter) => {
    if (input.filter((l) => l === letter).length > 1) {
      isDuplicated = true;
    }
  });

  return isDuplicated === false;
}
