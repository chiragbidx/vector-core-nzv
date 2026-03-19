import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

import { getAuthSession } from "@/lib/auth/session";
import { db } from "@/lib/db/client";
import { users } from "@/lib/db/schema";

import Client from "./client";

// Server route entry for /dashboard.
// Auth checks and user read exist to ensure session consistency.

export default async function DashboardPage() {
  const session = await getAuthSession();
  if (!session) redirect("/auth#signin");

  const [user] = await db
    .select({ firstName: users.firstName })
    .from(users)
    .where(eq(users.id, session.userId))
    .limit(1);

  return <Client />;
}