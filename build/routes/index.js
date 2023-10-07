"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexRouter = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
exports.indexRouter = (0, express_1.Router)();
exports.indexRouter.route('/').get(controllers_1.indexController.indexWelcome);
