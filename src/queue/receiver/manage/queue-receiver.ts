import amqp from "amqplib";

export  async function consumer<T>(
  queueName: string,
  callBack: (message: T) => void
) {
  try {
    const connection = await amqp.connect("amqp://localhost");
    const channel = await connection.createChannel();

    process.on("SIGINT", async () => {
      await channel.close();
      await connection.close();
    });
    const consumerTag = `${queueName}_${Date.now()}`; 
    await channel.assertQueue(queueName, { durable: false });
    await channel.consume(
      queueName,
      (message) => {
        if (message) {
          callBack(<T>JSON.parse(message.content.toString()));
          // channel.ack(message); // Acknowledge after successful processing
        }
      },
      { noAck: true, consumerTag }
    );

    console.log(" [*] Waiting for messages. To exit press CTRL+C");
  } catch (err) {
    console.warn(err);
  }
}
