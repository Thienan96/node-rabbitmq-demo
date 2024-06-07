"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendTestMessageToqueue = void 0;
const queue_name_1 = require("../queue-name");
const queue_dispatcher_1 = require("./queue-dispatcher");
function sendTestMessageToqueue(event) {
    (0, queue_dispatcher_1.dispatchEvent)(queue_name_1.QueueName.TEST_QUEUE, event);
}
exports.sendTestMessageToqueue = sendTestMessageToqueue;
