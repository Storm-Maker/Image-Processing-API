// imageProcessor is used to generate cropped images with the required width and hight using Sharp

import sharp from 'sharp';

const inputDir = './assets/full/';
const outputDir = './assets/thumb/';

type Img = {
  targetImage: string;
  processedImage: string;
  readonly width: number;
  readonly height: number;
};

async function imageProcessor(
  fileName: unknown,
  width: unknown,
  height: unknown
) {
  const filename: string = fileName as unknown as string;
  const targetFile: string = filename.substring(0, filename.indexOf('.'));

  const newImg: Img = {
    targetImage: inputDir + filename,
    processedImage: `${targetFile}-${width}-${height}.jpg`,
    width: +(width as unknown as number),
    height: +(height as unknown as number),
  };

  await sharp(newImg.targetImage)
    .resize(newImg.width, newImg.height)
    .toFile(`${outputDir}${newImg.processedImage}`);
  // .toFile(newImg.processedImage, (err, info) => { console.log(err, info) })

  return newImg.processedImage;
}

export default imageProcessor;
