import pool from "@/lib/db";

export async function POST(request) {
  try {
    const body = await request.json();

    const { name, email, message } = body;

    const result = await pool.query(
      `
      INSERT INTO contacts (name, email, message)
      VALUES ($1, $2, $3) //parameterized query to prevent SQL injection
      RETURNING id, name, email, message, created_at
      `,
      [name, email, message]
    );

    return Response.json(
      {
        success: true,
        contact: result.rows[0],
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Failed to create contact:", error);

    return Response.json(
      {
        success: false,
        error: "Failed to create contact",
      },
      { status: 500 }
    );
  }
}