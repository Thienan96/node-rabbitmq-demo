import { TestEvent } from "../event/test";
import { QueueName } from "../queue-name";
import { dispatchEvent } from "./queue-dispatcher";

export function sendTestMessage(event: TestEvent) {
  dispatchEvent<TestEvent>(QueueName.TEST_QUEUE, event);
}

export function sendTestMessage2(event: TestEvent) {
  dispatchEvent<TestEvent>(QueueName.TEST_QUEUE_2, event);
}
