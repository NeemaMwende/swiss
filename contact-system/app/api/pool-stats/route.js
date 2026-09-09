import pool from "@/lib/db"

export async function GET() {
    return Response.json(
        {
            total: pool.totalCount,
            idle: pool.idleCount,
            waiting: pool.waitingCount,
        }
    );
}