"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const uuid_1 = require("uuid");
const user_1 = require("../models/user");
const validateField_1 = require("../utils/validateField");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = (0, uuid_1.v4)().toString();
    try {
        const user = req.body;
        if (!user || Object.keys(user).length === 0)
            throw new Error('no user details');
        const { firstName, surname, email, telephoneNumber, dateOfBirth, comment, gender } = user;
        // validate input
        if (!(0, validateField_1.validateComment)(comment)) {
            throw new Error('Invalid comment');
        }
        if (!(0, validateField_1.validateName)(firstName)) {
            throw new Error('Invalid firstName');
        }
        if (!(0, validateField_1.validateName)(surname)) {
            throw new Error('Invalid surname');
        }
        if (!(0, validateField_1.validateEmail)(email)) {
            throw new Error('Invalid email');
        }
        if (!(0, validateField_1.validatePhoneNumber)(telephoneNumber)) {
            throw new Error('Invalid telephoneNumber');
        }
        if (!(0, validateField_1.validateGender)(gender)) {
            throw new Error('Invalid gender');
        }
        if (!(0, validateField_1.validateFullDob)(new Date(dateOfBirth))) {
            throw new Error('Invalid date of birth');
        }
        const record = yield user_1.User.create(Object.assign(Object.assign({}, req.body), { dateOfBirth: new Date(dateOfBirth) }));
        res.send({ error: null, data: record });
    }
    catch (e) {
        if (e instanceof Error) {
            res.status(400).send({ error: e.message, data: null });
        }
    }
});
exports.createUser = createUser;
