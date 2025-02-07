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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dispatchEvent = void 0;
const amqplib_1 = __importDefault(require("amqplib"));
function dispatchEvent(queueName, event) {
    return __awaiter(this, void 0, void 0, function* () {
        let connection;
        try {
            console.log('adasda');
            connection = yield amqplib_1.default.connect("amqp://localhost");
            const channel = yield connection.createChannel();
            yield channel.assertQueue(queueName, { durable: false });
            channel.sendToQueue(queueName, Buffer.from(JSON.stringify(event)));
            console.log(" [x] Sent '%s'", event);
            yield channel.close();
        }
        catch (err) {
            console.warn(err);
        }
        finally {
            if (connection)
                yield connection.close();
        }
    });
}
exports.dispatchEvent = dispatchEvent;
