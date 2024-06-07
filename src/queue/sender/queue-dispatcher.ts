import amqp, { Connection } from "amqplib";

export async function dispatchEvent<T>(queueName: string, event: T) {
  let connection!: Connection;
  try {

    connection = await amqp.connect("amqp://localhost");
    const channel = await connection.createChannel();

    await channel.assertQueue(queueName, { durable: false });
    channel.sendToQueue(queueName, Buffer.from(JSON.stringify(event)));
    console.log(" [x] Sent '%s'", event);
    await channel.close();
  } catch (err) {
    console.warn(err);
  } finally {
    if (connection) await connection.close();
  }
}
