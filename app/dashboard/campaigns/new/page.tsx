"use client";

export default function CreateCampaignPage() {
  return (
    <section className="flex flex-col items-center py-20 text-center">
      <h1 className="text-3xl md:text-4xl font-semibold mb-2">
        Create New Campaign
      </h1>
      <p className="text-muted-foreground mb-4">
        Start by entering your campaign details.
      </p>
      {/* Placeholder for form */}
      <div className="rounded-lg border p-8 bg-card mt-6 text-muted-foreground text-sm">
        (Campaign builder coming soon.)
      </div>
    </section>
  );
}