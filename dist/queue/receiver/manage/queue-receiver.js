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
exports.consumer = void 0;
const amqplib_1 = __importDefault(require("amqplib"));
function consumer(queueName, callBack) {
    return __awaiter(this, void 0, void 0, function* () {
        let connection;
        try {
            connection = yield amqplib_1.default.connect("amqp://localhost");
            const channel = yield connection.createChannel();
            process.once("SIGINT", () => __awaiter(this, void 0, void 0, function* () {
                yield channel.close();
                yield connection.close();
            }));
            yield channel.assertQueue(queueName, { durable: false });
            yield channel.consume(queueName, (message) => {
                if (message) {
                    console.log('listening.....');
                    console.log(JSON.parse(message.content.toString()));
                    callBack(JSON.parse(message.content.toString()));
                }
            }, { noAck: true });
            console.log(" [*] Waiting for messages. To exit press CTRL+C");
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
exports.consumer = consumer;
