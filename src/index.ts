import { determineBestBoard, determineBingoWin } from "./game";
import { getBingoCardData, readFileData } from "./utils";

const main = async () => {
  try {
    const fileData = await readFileData("data/2.txt");
    const bingoData = getBingoCardData(fileData);

    console.log("Input => ", bingoData.bingoDataList);
    const winResult = bingoData.bingoDataList.map((bingoCard) =>
      determineBingoWin(bingoData.numbersCalled, bingoCard)
    );

    const bestBoard = determineBestBoard(
      bingoData.numbersCalled,
      bingoData.bingoDataList
    );
    console.log("WinResult => ", winResult);
    bestBoard !== -1
      ? console.log(
          `Pick board ${bestBoard} to guarantee a win against the giant squid!`
        )
      : console.log("No board guarantees a win.");
  } catch (error) {
    console.log(error);
  }
};

main();
