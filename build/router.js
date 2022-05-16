"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var FirstController_1 = require("./controller/FirstController");
var router = (0, express_1.Router)();
exports.router = router;
router.get("/", FirstController_1.firstController.home);
