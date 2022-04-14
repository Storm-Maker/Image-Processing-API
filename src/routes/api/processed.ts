import express from 'express';
import { engine } from 'express-handlebars';
import path from 'path';
import isPictureProcessed from '../../utilites/isPictureProcessed';
import ProcessedPictures from '../../utilites/listProcessedPictures';

const app = express();
const processed = express.Router();
const rgx = /[a-zA-Z0-9]*\.jpg$/;

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

processed.get(
  '/:filename',
  async (req: express.Request, res: express.Response) => {
    const fileName: string = req.params.filename as unknown as string;
    const isPictureAvailable: boolean = await isPictureProcessed(fileName);

    try {
      // checks if image name was empty or wasn't produced in assets/thumb or didn't include .jpg as extension in the request then will render html page with Image not found and status code 404
      if (
        fileName === '' ||
        !isPictureAvailable ||
        !fileName.includes('.jpg')
      ) {
        const ProcessedPics: string[] = await ProcessedPictures();

        // checks if the image name was not provided and renders Image not found check name html page and set status code to 404
        if (!rgx.exec(fileName)) {
          res.status(404).render('ImageNotFoundValidName', {
            imgName: fileName,
            ProcessedPictures: ProcessedPics,
          });

          // checks if the image name was not available and renders Image not found check availability html page and set status code to 404
        } else {
          res.status(404).render('ImageNotFoundCheckAvail', {
            imgName: fileName,
            ProcessedPictures: ProcessedPics,
          });
        }

        // If validation was success then else will render the image with status code 200
      } else {
        res.status(200).render('displayImage', { imgName: fileName });
      }
    } catch (err) {
      res.status(400).send(err);
    }
  }
);

export default processed;
