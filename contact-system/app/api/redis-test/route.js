import redis from "@/lib/redis";

export async function GET() {
    await redis.set("name", "Angel");
    const value = await redis.get("name");

    return Response.json({
        value
    });
 }
