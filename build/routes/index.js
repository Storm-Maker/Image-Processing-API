"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var express_handlebars_1 = require("express-handlebars");
var path_1 = __importDefault(require("path"));
var images_1 = __importDefault(require("./api/images"));
var processed_1 = __importDefault(require("./api/processed"));
var app = (0, express_1.default)();
var routes = express_1.default.Router();
// set and initialize the express engine to Handlebars
app.engine('handlebars', (0, express_handlebars_1.engine)({
    defaultLayout: 'index',
    extname: 'handlebars',
    layoutsDir: __dirname + '../../views/layouts',
    partialsDir: __dirname + '../../views',
}));
app.set('view engine', 'handlebars');
app.set('views', path_1.default.join(__dirname, '../../views/layouts'));
// set root /api route to a guider page
routes.get('/', function (req, res) {
    res.render('index');
});
// sets the /images route to images
routes.use('/images', images_1.default);
routes.use('/images:filename:width:height', images_1.default);
// sets the /processed route to processed
routes.use('/processed', processed_1.default);
routes.use('/processed:filename', processed_1.default);
exports.default = routes;
