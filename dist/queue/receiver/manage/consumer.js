"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.receiveTestMessage = void 0;
const queue_name_1 = require("../../queue-name");
const test_queue_listener_1 = require("../test-queue-listener");
const queue_receiver_1 = require("./queue-receiver");
function receiveTestMessage() {
    (0, queue_receiver_1.consumer)(queue_name_1.QueueName.TEST_QUEUE, (event) => (0, test_queue_listener_1.TestQueueListener)(event));
}
exports.receiveTestMessage = receiveTestMessage;
