// Lists the available pictures in the assets/full folder and returns an array containing the available pictures if any

import { default as fsWithCallbacks } from 'fs';

const fs = fsWithCallbacks.promises;
const checkPath = './assets/full';

async function listAvailablePictures() {
  const AvailablePictures: string[] = [];
  const items: fsWithCallbacks.Dirent[] = await fs.readdir(checkPath, {
    withFileTypes: true,
  });

  for (const item of items) {
    AvailablePictures.push(item.name);
  }

  return AvailablePictures;
}

export default listAvailablePictures;
