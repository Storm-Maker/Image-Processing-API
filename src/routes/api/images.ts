import express from 'express';
import { engine } from 'express-handlebars';
import path from 'path';
import imageCallbacks from '../../utilites/imageValidationAndCreationCallbacks';
import listAvailablePictures from '../../utilites/listAvailablePictures';

const app = express();
const images = express.Router();

// set and initialize the express engine to Handlebars
app.engine(
  'handlebars',
  engine({
    defaultLayout: 'index',
    extname: 'handlebars',
    layoutsDir: __dirname + '../../views/layouts',
    partialsDir: __dirname + '../../views',
  })
);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, '../../views/layouts'));

images.get('/', async (req: express.Request, res: express.Response) => {
  const fileName = req.query.filename;

  try {
    const requestNameAndStatus = await imageCallbacks(
      fileName,
      req.query.width,
      req.query.height
    );

    // Check the parameter validation if failed set status code to 400 then render an html page with an appropriate error message and the request parameter.
    if (
      requestNameAndStatus.imgName === '' &&
      requestNameAndStatus.Status === 400
    ) {
      const param: string = JSON.stringify(req.originalUrl);
      const AvailPics: string[] = await listAvailablePictures();

      if (
        (!requestNameAndStatus.dimensionsPositive ||
          !requestNameAndStatus.dimensionsValid) &&
        (!requestNameAndStatus.nameValid || !requestNameAndStatus.available)
      ) {
        res
          .status(requestNameAndStatus.Status)
          .render('checkParam', { param: param, AvailPics: AvailPics });
      } else if (
        !requestNameAndStatus.dimensionsValid ||
        !requestNameAndStatus.dimensionsPositive
      ) {
        res
          .status(requestNameAndStatus.Status)
          .render('checkDimensions', { param: param, AvailPics: AvailPics });
      } else if (
        !requestNameAndStatus.nameValid ||
        !requestNameAndStatus.available
      ) {
        res
          .status(requestNameAndStatus.Status)
          .render('checkFilename', { param: param, AvailPics: AvailPics });
      } else {
        res
          .status(requestNameAndStatus.Status)
          .render('unknownError', { param: param, AvailPics: AvailPics });
      }
    } else if (
      requestNameAndStatus.Status === 200 &&
      requestNameAndStatus.imgName !== ''
    ) {
      // Check if a new image was produced then will render the new image in an HTML page
      res
        .status(requestNameAndStatus.Status)
        .render('displayImage', { imgName: requestNameAndStatus.imgName });
    } else {
      const givenFile: string = fileName as unknown as string;
      let targetFile: string = givenFile.substring(0, givenFile.indexOf('.'));
      targetFile = `${targetFile}-${req.query.width}-${req.query.height}.jpg`;

      // checks If the image was already produced, then will render an HTML page with that image
      res
        .status(requestNameAndStatus.Status)
        .render('displayImage', { imgName: targetFile });
    }
  } catch (err) {
    res.status(400).send(err);
  }
});

export default images;
