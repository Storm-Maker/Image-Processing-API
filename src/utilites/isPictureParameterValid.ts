// checks the requested parameter if valid

async function isPictureParameterValid(
  fileName: unknown,
  width: unknown,
  height: unknown
) {
  const pictureName: string = fileName as unknown as string;

  const paraValidation = {
    isParaValid: false,
    isDimensionsValid: false,
    isNameValid: false,
    isDimensionsPositive: false,
  };

  // If the file name isn't empty or don't include .jpg or the width & height is less than or equal 0, then it will return false as the parameter isn't valid.
  if (
    +(width as unknown as number) <= 0 ||
    +(height as unknown as number) <= 0
  ) {
    paraValidation.isDimensionsPositive = false;
  } else {
    paraValidation.isDimensionsPositive = true;
  }

  if (
    isNaN(parseInt(width as unknown as string)) ||
    isNaN(parseInt(height as unknown as string))
  ) {
    paraValidation.isDimensionsValid = false;
  } else {
    paraValidation.isDimensionsValid = true;
  }

  if (pictureName === '' || !pictureName.includes('.jpg')) {
    paraValidation.isNameValid = false;
  } else {
    paraValidation.isNameValid = true;
  }

  if (
    paraValidation.isDimensionsValid &&
    paraValidation.isDimensionsPositive &&
    paraValidation.isNameValid
  ) {
    paraValidation.isParaValid = true;
  }

  // returns object with validation
  return paraValidation;
}

export default isPictureParameterValid;
