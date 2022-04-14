import express from 'express';
import { engine } from 'express-handlebars';
import routes from './routes/index';
import logger from './middleware/logger';
import path from 'path';

const app = express();
const port = 3000;

// set and initialize the express engine to Handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

// binding and listing to the host at port 3000
app.listen(port, () => {
  console.log(`Server Started at http://localhost:${port}`);
});

// setting logger middleware to monitor all the url requests
app.use(logger);

// setting the static folder to assets/thumb
app.use(express.static(path.join(__dirname, '../assets/thumb/')));

// setting the /api route to routes
app.use('/api', routes);

export default app;
