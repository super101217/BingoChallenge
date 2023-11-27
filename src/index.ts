import { determineBingoWin } from "./game";
import { getBingoCardData, readFileData } from "./utils";

const main = async () => {
  try {
    const fileData = await readFileData("data/2.txt");
    const bingoData = getBingoCardData(fileData);
    console.log("Input => ", bingoData.bingoDataList);
    const winResult = bingoData.bingoDataList.map((bingoCard) =>
      determineBingoWin(bingoData.numbersCalled, bingoCard)
    );
    console.log("WinResult => ", winResult);
  } catch (error) {
    console.log(error);
  }
};

main();
