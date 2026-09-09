import pool from "@/lib/db"

export async function GET() {
    const result = await pool.query(
        `SELECT pg_sleep(5)`
    );

    return Response.json({
        success: true
    });
}