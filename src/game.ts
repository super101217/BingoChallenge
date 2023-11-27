import { BingoCard, CardKeyValue, NumbersCalled } from "./types";

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

export const getCardKeyValue = (bingoCard: BingoCard): CardKeyValue => {
  const keyValue: CardKeyValue = {} as CardKeyValue;

  bingoCard.forEach((row, i) => {
    row.forEach((num, j) => {
      keyValue[num] = { x: i, y: j };
    });
  });

  return keyValue;
};

export const determineBestBoard = (
  numbersCalled: NumbersCalled,
  bingoCards: BingoCard[]
): number => {
  const tempBingoCards = bingoCards;

  const cardKeyValue: CardKeyValue[] = tempBingoCards.map((card) =>
    getCardKeyValue(card)
  );

  for (let i = 0; i < numbersCalled.length; i++) {
    for (let j = 0; j < tempBingoCards.length; j++) {
      const cardKeyValue = getCardKeyValue(bingoCards[j]);
      const { x, y } = cardKeyValue[numbersCalled[i]] || {};

      if (x !== undefined && y !== undefined) {
        bingoCards[j][x][y] = -1;

        if (
          bingoCards[j][x].every((cell) => cell === -1) ||
          bingoCards[j].every((row) => row[y] === -1)
        ) {
          return j;
        }
      }
    }
  }
  return -1;
};
