"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var supertest_1 = __importDefault(require("supertest"));
var index_1 = __importDefault(require("../../../index"));
var request = (0, supertest_1.default)(index_1.default);
describe('Should test the IMAGE endpoint responses', function () {
    afterEach(function (done) {
        done();
    });
    it('gets the api endpoint redirect and render cuz no name', function () {
        request
            .get("/images?filename=fjord&width=210&height=802/")
            .then(function (res) { return expect(res.redirect).toBeTrue; });
    });
    it('gets the api endpoint redirect and render cuz no name', function () {
        request
            .get("/api/images?filename=&width=210&height=803/")
            .then(function (res) { return expect(res.redirect).toBeTrue; });
    });
});
