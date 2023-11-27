import { determineBingoWin, getCardKeyValue, determineBestBoard } from "./game";
import { BingoCard, NumbersCalled } from "./types";

describe("Bingo Functions", () => {
  const sampleBingoCard: BingoCard = [
    [22, 13, 17, 11, 0],
    [8, 2, 23, 4, 24],
    [21, 9, 14, 16, 7],
    [6, 10, 3, 18, 5],
    [1, 12, 20, 15, 19],
  ];

  const sampleNumbersCalled: NumbersCalled = [
    7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24, 10, 16, 13, 6, 15, 25, 12, 22, 18,
    20, 8, 19, 3, 26, 1,
  ];

  describe("determineBingoWin", () => {
    it("should return true for a winning bingo card", () => {
      const result = determineBingoWin(sampleNumbersCalled, sampleBingoCard);
      expect(result).toBe(true);
    });

    it("should return false for a non-winning bingo card", () => {
      const nonWinningNumbers: NumbersCalled = [1, 2, 3, 4, 6];
      const result = determineBingoWin(nonWinningNumbers, sampleBingoCard);
      expect(result).toBe(false);
    });
  });

  describe("determineBestBoard", () => {
    it("should return the index of the winning board", () => {
      const bingoCards: BingoCard[] = [sampleBingoCard];
      const result = determineBestBoard(sampleNumbersCalled, bingoCards);
      expect(result).toBe(0);
    });

    it("should return -1 if no board guarantees a win", () => {
      const nonWinningNumbers: NumbersCalled = [1, 2, 3, 4, 6];
      const bingoCards: BingoCard[] = [sampleBingoCard];
      const result = determineBestBoard(nonWinningNumbers, bingoCards);
      expect(result).toBe(-1);
    });
  });
});
