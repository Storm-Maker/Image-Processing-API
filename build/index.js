"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var express_handlebars_1 = require("express-handlebars");
var index_1 = __importDefault(require("./routes/index"));
var logger_1 = __importDefault(require("./middleware/logger"));
var path_1 = __importDefault(require("path"));
var app = (0, express_1.default)();
var port = 3000;
// set and initialize the express engine to Handlebars
app.engine('handlebars', (0, express_handlebars_1.engine)());
app.set('view engine', 'handlebars');
// binding and listing to the host at port 3000
app.listen(port, function () {
    console.log("Server Started at http://localhost:".concat(port));
});
// setting logger middleware to monitor all the url requests
app.use(logger_1.default);
// setting the static folder to assets/thumb
app.use(express_1.default.static(path_1.default.join(__dirname, '../assets/thumb/')));
// setting the /api route to routes
app.use('/api', index_1.default);
exports.default = app;
