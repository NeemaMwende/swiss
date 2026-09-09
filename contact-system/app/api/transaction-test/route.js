import { withTransaction } from "@/lib/transaction";

export async function POST() {
    try {
        await withTransaction(async (client) => {
            await client.query(
                `
                INSERT INTO contacts
                (name, email, message)
                VALUES
                ($1, $2, $3)
                `,
                [
                    "Transaction Test",
                    "transaction@example.com",
                    "This should be rolled back"
                ]
            );
            throw new Error("Something failed")
        });

        return Response.json({
            success: true
        });

    } catch (error) {
        return Response.json({
            success: false,
            error: error.message
        }, { status: 500 });
    }
}