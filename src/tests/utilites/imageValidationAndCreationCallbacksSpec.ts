import imageValidation from '../../utilites/imageValidationAndCreationCallbacks';

describe('>> Callback all the functions and return status code of 200 or 400', () => {
  it(`Should return 200 and the produced picture name if image is produced *IN ORDER TO PASS THE IMAGE MUST NOT BE PRODUCED`, async () => {
    const callbacks = await imageValidation(
      'deleteBeforeJasmineTest.jpg',
      100,
      100
    );

    if (callbacks.imgName != 'deleteBeforeJasmineTest.jpg') {
      console.log(
        '\n DELETE deleteBeforeJasmineTest.jpg from assets/thumb to pass \n'
      );
    }

    expect(callbacks.imgName).toEqual('deleteBeforeJasmineTest-100-100.jpg');
    expect(callbacks.Status).toEqual(200);
  });
  it('Should return 200 and empty string if picture already produced', async () => {
    const callbacks = await imageValidation('fjord.jpg', 900, 900);
    expect(callbacks.imgName).toEqual('');
    expect(callbacks.Status).toEqual(200);
  });
  it('turn 200 and empty string if any validation failed', async () => {
    const callbacks = await imageValidation('', 0, 0);
    expect(callbacks.imgName).toEqual('');
    expect(callbacks.Status).toEqual(400);
  });
});
