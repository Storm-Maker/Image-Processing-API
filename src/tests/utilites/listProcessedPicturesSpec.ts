import { default as fsWithCallbacks } from 'fs';
import listProcessedPictures from '../../utilites/listProcessedPictures';

describe('>> List Processed pictures from assets/thumb', () => {
  const fs: typeof fsWithCallbacks.promises = fsWithCallbacks.promises;

  it('Should return a defined array', async () => {
    const ProcessedPic: string[] = await listProcessedPictures();
    expect(ProcessedPic).toBeDefined();
  });

  it('Should return an array containing all the processed pictures if any', async () => {
    const ProcessedPic: string[] = await listProcessedPictures();

    const ProcessedPictures: string[] = [];
    const listThumb: fsWithCallbacks.Dirent[] = await fs.readdir(
      './assets/thumb/',
      {
        withFileTypes: true,
      }
    );
    for (const item of listThumb) {
      ProcessedPictures.push(item.name);
    }
    expect(ProcessedPic).toEqual(ProcessedPictures);
  });
});
