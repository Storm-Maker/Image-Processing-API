import isPictureParameterValid from '../../utilites/isPictureParameterValid';

describe('>> Check if the request parameter valid', () => {
  it('Should return true', async () => {
    const isParaValid = await isPictureParameterValid(
      'santamonica.jpg',
      500,
      500
    );
    expect(isParaValid.isParaValid).toEqual(true);
  });

  it(`Should return false cuz of incorrect extension"`, async () => {
    const isParaValid = await isPictureParameterValid(
      'santamonica.png',
      500,
      500
    );
    expect(isParaValid.isNameValid).toEqual(false);
  });
  it(`Should return false cuz of missing extension"`, async () => {
    const isParaValid = await isPictureParameterValid('santamonica', 500, 500);
    expect(isParaValid.isNameValid).toEqual(false);
  });
  it(`Should return false for empty file name"`, async () => {
    const isParaValid = await isPictureParameterValid('', 500, 500);
    expect(isParaValid.isNameValid).toEqual(false);
  });
  it(`Should return false for empty file name & width zero value"`, async () => {
    const isParaValid = await isPictureParameterValid('', 0, 500);
    expect(isParaValid.isNameValid && isParaValid.isDimensionsPositive).toEqual(
      false
    );
  });
  it(`Should return false for empty file name & height zero value"`, async () => {
    const isParaValid = await isPictureParameterValid('', 500, 0);
    expect(isParaValid.isNameValid && isParaValid.isDimensionsPositive).toEqual(
      false
    );
  });
  it(`Should return false for empty file name & zero values"`, async () => {
    const isParaValid = await isPictureParameterValid('', 0, 0);
    expect(isParaValid.isNameValid && isParaValid.isDimensionsPositive).toEqual(
      false
    );
  });
  it(`Should return false for empty file name & -1"`, async () => {
    const isParaValid = await isPictureParameterValid('', -1, 500);
    expect(isParaValid.isNameValid && isParaValid.isDimensionsPositive).toEqual(
      false
    );
  });
  it(`Should return false for width equal 0"`, async () => {
    const isParaValid = await isPictureParameterValid(
      'santamonica.png',
      '500',
      0
    );
    expect(isParaValid.isNameValid && isParaValid.isDimensionsPositive).toEqual(
      false
    );
  });
  it(`Should return false for non numerical value"`, async () => {
    const isParaValid = await isPictureParameterValid(
      'santamonica.png',
      500,
      '50'
    );
    expect(
      isParaValid.isNameValid &&
        isParaValid.isDimensionsPositive &&
        isParaValid.isDimensionsValid
    ).toEqual(false);
  });
  it(`Should return false for width = 0 and hight = string"`, async () => {
    const isParaValid = await isPictureParameterValid(
      'santamonica.png',
      0,
      '100'
    );
    expect(
      isParaValid.isNameValid &&
        isParaValid.isDimensionsPositive &&
        isParaValid.isDimensionsValid
    ).toEqual(false);
  });
  it(`Should return false for width = 0"`, async () => {
    const isParaValid = await isPictureParameterValid(
      'santamonica.png',
      0,
      100
    );
    expect(isParaValid.isNameValid && isParaValid.isDimensionsPositive).toEqual(
      false
    );
  });
  it(`Should return false for height = 0"`, async () => {
    const isParaValid = await isPictureParameterValid(
      'santamonica.png',
      500,
      0
    );
    expect(isParaValid.isNameValid && isParaValid.isDimensionsPositive).toEqual(
      false
    );
  });
});
