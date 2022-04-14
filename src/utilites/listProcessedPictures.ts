// Lists the processed pictures in the assets/thumb folder and returns an array containing the produced pictures if any

import { default as fsWithCallbacks } from 'fs';

const fs = fsWithCallbacks.promises;
const checkPath = './assets/thumb/';

async function listProcessedPictures() {
  const ProcessedPictures: string[] = [];
  const items: fsWithCallbacks.Dirent[] = await fs.readdir(checkPath, {
    withFileTypes: true,
  });

  for (const item of items) {
    ProcessedPictures.push(item.name);
  }
  return ProcessedPictures;
}

export default listProcessedPictures;
