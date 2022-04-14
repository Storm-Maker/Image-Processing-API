import imageProcessor from '../../utilites/imageProcessor';

describe('>> Should produce an image and return the new image name', () => {
  it('Should return the produced image name', async () => {
    const imgProcessor: string = await imageProcessor('fjord.jpg', 101, 101);
    expect(imgProcessor).toEqual('fjord-101-101.jpg');
  });
});
