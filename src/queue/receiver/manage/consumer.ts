import { TestEvent } from "../../event/test";
import { QueueName } from "../../queue-name";
import { TestQueueListener } from "../test-queue-listener";
import { consumer } from "./queue-receiver";
export function receiveTestMessage() {
  (async () => {
    await consumer<TestEvent>(QueueName.TEST_QUEUE, (event) =>
      TestQueueListener(event)
    );
  })();
}
export function receiveTestMessage2() {
  (async () => {
    await consumer<TestEvent>(QueueName.TEST_QUEUE_2, (event) =>
      TestQueueListener(event)
    );
  })();
}
