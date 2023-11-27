import { getBingoCardData, readFileData } from "./utils";

const main = async () => {
  try {
    const fileData = await readFileData("data/2.txt");
    const bingoData = getBingoCardData(fileData);
  } catch (error) {
    console.log(error);
  }
};

main();
