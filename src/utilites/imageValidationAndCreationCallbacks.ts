// Callbacks for the route /api/images

import isPictureParameterValid from './isPictureParameterValid';
import listAvailablePictures from './listAvailablePictures';
import listProcessedPictures from './listProcessedPictures';
import isPictureUnique from './isPictureUnique';
import imageProcessor from './imageProcessor';

async function imageValidationAndCreationCallbacks(
  fileName: unknown,
  width: unknown,
  height: unknown
) {
  // Checking the requested filename, width and height using the isPictureParameterValid
  const paraValidation = await isPictureParameterValid(fileName, width, height);

  // Generating a list of the available and processed images
  const listAvailablePic: string[] = await listAvailablePictures();
  const listProcessedPic: string[] = await listProcessedPictures();

  // Checking if the picture was not generated before
  const checkUnique = await isPictureUnique(
    listProcessedPic,
    listAvailablePic,
    fileName,
    width,
    height
  );

  let imgNameAndStatus = {
    imgName: fileName,
    Status: 400,
    paraValid: paraValidation.isParaValid,
    dimensionsValid: paraValidation.isDimensionsValid,
    dimensionsPositive: paraValidation.isDimensionsPositive,
    nameValid: paraValidation.isNameValid,
    available: checkUnique.Available,
  };

  if (paraValidation.isParaValid && checkUnique.Available) {
    // If the image doesn't wasn't generated before and is available in the assets/full then a new image will be generated
    if (!checkUnique.Existing) {
      const createImg: string = await imageProcessor(fileName, width, height);
      // sets the image name to the new generated image name and the status code to 200
      imgNameAndStatus = {
        imgName: createImg,
        Status: 200,
        paraValid: paraValidation.isParaValid,
        dimensionsValid: paraValidation.isDimensionsValid,
        dimensionsPositive: paraValidation.isDimensionsPositive,
        nameValid: paraValidation.isNameValid,
        available: checkUnique.Available,
      };
      // If the image was already existing, then it will set status code to 200 and image name to empty string
    } else if (checkUnique.Existing) {
      imgNameAndStatus = {
        imgName: '',
        Status: 200,
        paraValid: paraValidation.isParaValid,
        dimensionsValid: paraValidation.isDimensionsValid,
        dimensionsPositive: paraValidation.isDimensionsPositive,
        nameValid: paraValidation.isNameValid,
        available: checkUnique.Available,
      };
    }
    // If the parameters were invalid, this will set the status code to 400 and the name to empty string
  } else {
    imgNameAndStatus = {
      imgName: '',
      Status: 400,
      paraValid: paraValidation.isParaValid,
      dimensionsValid: paraValidation.isDimensionsValid,
      dimensionsPositive: paraValidation.isDimensionsPositive,
      nameValid: paraValidation.isNameValid,
      available: checkUnique.Available,
    };
  }

  // will return the image name and the status code
  return imgNameAndStatus;
}

export default imageValidationAndCreationCallbacks;
