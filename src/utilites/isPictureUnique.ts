// checks if the image is produced & if available to be produced

async function isPictureUnique(
  processedPictures: unknown,
  availablePictures: unknown,
  fileName: unknown,
  width: unknown,
  height: unknown
) {
  let isExisting = false;
  let isAvailable = false;
  const givenFile: string = fileName as unknown as string;
  let targetFile: string = givenFile.substring(0, givenFile.indexOf('.'));
  targetFile = `${targetFile}-${width}-${height}.jpg`;

  // Check if required image is already produced
  for (const file of processedPictures as unknown as string) {
    if (file === targetFile) {
      isExisting = true;
    }
  }

  // Check if required image is available in the folder
  for (const file of availablePictures as unknown as string) {
    if (file === fileName) {
      isAvailable = true;
    }
  }

  // Create object with picture availability and uniqueness
  const checkUnique = {
    Existing: isExisting,
    Available: isAvailable,
  };

  return checkUnique;
}

export default isPictureUnique;
