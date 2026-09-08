import pool from "@/lib/db";

export async function GET() { 
    try { 
        const result = await pool.query("SELECT NOW()");
        
        return Response.json({
            success: true,
            databaseTime: result.rows[0].now,
        });
        
    } catch (error) {
        console.error("Database connection failed:", error);

        return Response.json(
            {
                success: false,
                error: "Database connection failed"
            },
            { status: 500 }
        );
     }
} 