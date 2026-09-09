import pool from "@/lib/db"

export async function GET() {
    const client = await pool.connect();
    await client.query(
        "SELECT NOW()"
    );
    return Response.json(
        {
            success: true
       }
    )
    client.release();
}