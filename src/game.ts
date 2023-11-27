import { BingoCard, NumbersCalled } from "./types";

export const determineBingoWin = (
  numbersCalled: NumbersCalled,
  bingoCard: BingoCard
): boolean => {
  const isNumberCalled = (num: number) => numbersCalled.includes(num);

  for (let i = 0; i < 5; i++) {
    if (
      bingoCard[i].every(isNumberCalled) ||
      bingoCard.every((row) => isNumberCalled(row[i]))
    ) {
      return true;
    }
  }
  return false;
};
