import fs from "fs";
import { BingoCard, NumbersCalled } from "./types";

export const readFileData = async (path: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) {
        return reject(err);
      } else {
        return resolve(data.toString());
      }
    });
  });
};

export const getBingoCardData = (fileData: string) => {
  const lines = fileData.split("\n");
  const numbersCalled: NumbersCalled = lines[0].split(",").map(Number);

  const boardCount = Math.floor(lines.length - 1) / 6;
  const bingoDataList: BingoCard[] = [];

  for (let i = 0; i < boardCount; i++) {
    const bingData: BingoCard = [];
    for (let j = 0; j < 5; j++) {
      bingData.push(
        lines[1 + i * 6 + j + 1]
          .split(" ")
          .filter((value) => !!value)
          .map(Number)
      );
    }
    bingoDataList.push(bingData);
  }

  return { numbersCalled, bingoDataList };
};
