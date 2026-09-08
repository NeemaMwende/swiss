import { createContact } from "@/repositories/contact.repository";

export async function submitContact(data) {
    const contact = await createContact(data);
    return contact;
}
