import redis from "@/lib/redis";

import {
  getContactCount
}
from "@/repositories/dashboard.repository";

export async function getCachedContactCount() {

  const cached =
    await redis.get(
      "contacts_count"
    );

  if (cached) {

    console.log(
      "CACHE HIT"
    );

    return Number(cached);
  }

  console.log(
    "CACHE MISS"
  );

  const count =
    await getContactCount();

  await redis.set(
    "contacts_count",
    count
  );

  return count;
}