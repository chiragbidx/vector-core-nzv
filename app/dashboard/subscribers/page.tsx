"use client";

import Link from "next/link";

export default function SubscribersPage() {
  return (
    <section className="flex flex-col items-center py-20 text-center">
      <h1 className="text-3xl md:text-4xl font-semibold mb-2">
        Subscribers
      </h1>
      <p className="text-muted-foreground mb-6">
        You have no subscribers.
      </p>
      <Link href="/dashboard/subscribers/new">
        <button className="bg-primary rounded-md px-5 py-2 text-white font-medium hover:bg-primary/90 transition">
          Add Subscribers
        </button>
      </Link>
    </section>
  );
}