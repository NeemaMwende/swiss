import pool from "@/lib/db";

export async function getContactCount() {

  const result =
    await pool.query(
      `
      SELECT COUNT(*)
      FROM contacts
      `
    );

  return Number(
    result.rows[0].count
  );
}