"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var supertest_1 = __importDefault(require("supertest"));
var index_1 = __importDefault(require("../../index"));
var request = (0, supertest_1.default)(index_1.default);
describe('Should test the API endpoint responses', function () {
    afterEach(function (done) {
        done();
    });
    it('gets the api endpoint redirect & render to the guide page', function () {
        request.get("/api/").then(function (res) { return expect(res.redirect).toBeTrue; });
    });
});
