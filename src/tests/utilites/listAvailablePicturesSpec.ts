import { default as fsWithCallbacks } from 'fs';
import listAvailablePictures from '../../utilites/listAvailablePictures';

describe('>> List Available pictures from assets/full', () => {
  const fs: typeof fsWithCallbacks.promises = fsWithCallbacks.promises;

  it('Should return a defined array', async () => {
    const ProcessedPic: string[] = await listAvailablePictures();
    expect(ProcessedPic).toBeDefined();
  });

  it('Should return an array containing all the available pictures if any', async () => {
    const ProcessedPic: string[] = await listAvailablePictures();

    const AvilPic: string[] = [];
    const listAvil: fsWithCallbacks.Dirent[] = await fs.readdir(
      './assets/full/',
      {
        withFileTypes: true,
      }
    );
    for (const item of listAvil) {
      AvilPic.push(item.name);
    }
    expect(ProcessedPic).toEqual(AvilPic);
  });
});
