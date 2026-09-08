import pool from "@/lib/db";

export async function createContact({
    name, email, message
}) {
    const result = await pool.query(
        `
        INSERT INTO contacts
        (
            name,
            email,
            message
        )
        VALUES
        (
            $1,
            $2,
            $3
        )
        RETURNING *
        `,
        [
            name,
            email,
            message
        ]
    )
    return result.rows[0]
}