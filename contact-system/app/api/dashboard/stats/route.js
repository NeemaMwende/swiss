import {
  getCachedContactCount
}
from "@/services/dashboard.service";

export async function GET() {

  const count =
    await getCachedContactCount();

  return Response.json({
    count
  });
}