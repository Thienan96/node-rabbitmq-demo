"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql2_1 = __importDefault(require("mysql2"));
const poolConfig = {
    host: '13.228.175.187',
    port: 33306,
    user: 'fplatformadmin',
    password: 'Fplatformadmin123#',
    database: 'evote_dev',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
};
const pool = mysql2_1.default.createPool(poolConfig);
exports.default = pool;
