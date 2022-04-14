import express from 'express';
import { engine } from 'express-handlebars';
import path from 'path';
import images from './api/images';
import processed from './api/processed';

const app = express();
const routes = express.Router();

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

// set root /api route to a guider page
routes.get('/', (req: express.Request, res: express.Response) => {
  res.render('index');
});

// sets the /images route to images
routes.use('/images', images);
routes.use('/images:filename:width:height', images);

// sets the /processed route to processed
routes.use('/processed', processed);
routes.use('/processed:filename', processed);

export default routes;
