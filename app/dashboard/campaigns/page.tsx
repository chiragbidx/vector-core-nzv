"use client";

import Link from "next/link";

export default function CampaignsPage() {
  return (
    <section className="flex flex-col items-center py-20 text-center">
      <h1 className="text-3xl md:text-4xl font-semibold mb-2">Campaigns</h1>
      <p className="text-muted-foreground mb-6">
        You have no campaigns.
      </p>
      <Link href="/dashboard/campaigns/new">
        <button className="bg-primary rounded-md px-5 py-2 text-white font-medium hover:bg-primary/90 transition">
          Create Campaign
        </button>
      </Link>
    </section>
  );
}