import { ContactSchema } from "@/validators/contact.validator";
import { submitContact } from "@/services/contact.service";

export async function POST(request) {
  try {

    const body = await request.json();

    const validated = ContactSchema.parse(body);

    const contact = await submitContact(validated);

    return Response.json(
      {
        success: true,
        contact
      },
      { status: 201 }
    );

  } catch (error) {

    console.error(error);

    return Response.json(
      {
        success: false,
        error: error.message
      },
      { status: 400 }
    );
  }
}