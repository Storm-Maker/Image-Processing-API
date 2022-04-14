"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var supertest_1 = __importDefault(require("supertest"));
var express_1 = __importDefault(require("express"));
var request = (0, supertest_1.default)(express_1.default);
describe('Should test the PROCESSED endpoint responses', function () {
    afterEach(function (done) {
        done();
    });
    it('gets the api endpoint response redirect and render cuz file not found & missing ext', function () {
        request
            .get("/processed/fjord")
            .then(function (res) { return expect(res.redirect).toBeTrue; });
    });
    it('gets the api endpoint response redirect and render cuz file not found', function () {
        request
            .get("/processed/fjord.jpg")
            .then(function (res) { return expect(res.redirect).toBeTrue; });
    });
});
