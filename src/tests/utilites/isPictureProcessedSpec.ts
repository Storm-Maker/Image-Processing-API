import isPictureProcessed from '../../utilites/isPictureProcessed';

describe('>> Check if Image is already processed', () => {
  it('Should return false when file is not in assets/thumb', async () => {
    const isProcessed: boolean = await isPictureProcessed('ab.jpg');
    expect(isProcessed).toEqual(false);
  });
  it(`Should return true "only when the picture is actually processed in assets/thumb"`, async () => {
    const isProcessed: boolean = await isPictureProcessed('fjord-975-906.jpg');

    if (isProcessed) {
      console.log(
        '\nKindly CREATE fjord-975-906.jpg in assets/thumb in order for this test to pass\n'
      );
    }

    expect(isProcessed).toEqual(true);
  });
});
