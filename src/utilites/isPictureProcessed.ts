// checks if the picture is already processed using the listProcessedPictures util

import listProcessedPictures from './listProcessedPictures';

async function isPictureProcessed(fileName: unknown) {
  const listProcessedPic: string[] = await listProcessedPictures();
  let isAvailable = false;

  // Check if required image already produced against the array list from the assets/thumb
  for (const file of listProcessedPic) {
    if (file === fileName) {
      isAvailable = true;
    }
  }
  return isAvailable;
}

// return boolean true if the image already produced
export default isPictureProcessed;
