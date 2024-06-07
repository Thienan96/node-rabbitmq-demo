import { TestEvent } from "../event/test";

export function TestQueueListener(event: TestEvent) {
    console.log(event.content)
}
