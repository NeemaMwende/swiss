import { createContact } from "@/repositories/contact.repository";
import { contactQueue } from "../queues/contact.queue";

export async function submitContact(data) {
    const contact = await createContact(data);
    await contactQueue.add(
        "send-confirmation-email",
        {
            contactId: contact.id
        }
    );
    
    return contact;
}
