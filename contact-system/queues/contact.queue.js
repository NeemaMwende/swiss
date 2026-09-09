import { Queue } from "bullmq";

const connection = {
    host: "localhost",
    port: 6379,
};

export const contactQueue = new Queue(
    "contact-processing",
    {
        connection,
    }

)

await contactQueue.add(
    "send-confirmation-email",  //job
    {
        contactId: 42
    }
);