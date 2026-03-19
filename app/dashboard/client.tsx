"use client";

export default function Client() {
  return (
    <section className="flex flex-col items-center justify-center h-full py-16 text-center">
      <h1 className="text-3xl md:text-4xl font-semibold mb-2">
        Welcome to MailBeam
      </h1>
      <p className="text-muted-foreground mb-8">
        Your all-in-one email marketing dashboard.
      </p>
      <div className="w-full max-w-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="rounded-xl border p-6 flex flex-col items-center justify-center">
          <span className="text-lg font-bold mb-2">Campaigns</span>
          <span className="text-muted-foreground text-sm mb-4">
            Plan, design, and send branded campaigns easily.
          </span>
          <a href="/dashboard/campaigns" className="font-medium text-primary hover:underline">
            Go to Campaigns
          </a>
        </div>
        <div className="rounded-xl border p-6 flex flex-col items-center justify-center">
          <span className="text-lg font-bold mb-2">Subscribers</span>
          <span className="text-muted-foreground text-sm mb-4">
            Manage and segment your email lists for growth.
          </span>
          <a href="/dashboard/subscribers" className="font-medium text-primary hover:underline">
            View Subscribers
          </a>
        </div>
        <div className="rounded-xl border p-6 flex flex-col items-center justify-center">
          <span className="text-lg font-bold mb-2">Analytics</span>
          <span className="text-muted-foreground text-sm mb-4">
            See your open rates, clicks, and campaign results.
          </span>
          <a href="/dashboard/analytics" className="font-medium text-primary hover:underline">
            View Analytics
          </a>
        </div>
      </div>
    </section>
  );
}