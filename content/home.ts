// ─── Hero ───────────────────────────────────────────────────────────────────
export type HeroContent = {
  badgeInner: string;
  badgeOuter: string;
  titleBefore: string;
  titleHighlight: string;
  titleAfter: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  heroImageLight: string;
  heroImageDark: string;
  heroImageAlt: string;
};

// (types unchanged, cut to save space)

export const defaultHomeContent: HomeContent = {
  hero: {
    badgeInner: "",
    badgeOuter: "",
    titleBefore: "",
    titleHighlight: "Effortless Email Marketing",
    titleAfter: "",
    subtitle:
      "Grow your business with easy-to-use campaign tools and powerful analytics.",
    primaryCta: { label: "Get Started Free", href: "/auth#signup" },
    secondaryCta: { label: "View Demo", href: "#" },
    heroImageLight: "/hero-image-light.jpeg",
    heroImageDark: "/hero-image-dark.jpeg",
    heroImageAlt: "MailBeam dashboard preview",
  },
  sponsors: {
    heading: "Built with trusted tools",
    items: [
      { icon: "Crown", name: "Vercel" },
      { icon: "Vegan", name: "Stripe" },
      { icon: "Ghost", name: "OpenAI" },
      { icon: "Puzzle", name: "Supabase" },
      { icon: "Squirrel", name: "Clerk" },
      { icon: "Cookie", name: "Resend" },
      { icon: "Drama", name: "Sentry" },
    ],
  },
  benefits: {
    eyebrow: "Why MailBeam",
    heading: "Effortless email marketing for small business",
    description:
      "MailBeam is a modern platform to create, send, and manage email marketing campaigns — all in one place.",
    items: [
      {
        icon: "Blocks",
        title: "Campaign Power",
        description: "Plan, design, and deliver email campaigns with ease.",
      },
      {
        icon: "Users",
        title: "List Management",
        description: "Organize, import, and target your subscribers.",
      },
      {
        icon: "BarChart3",
        title: "Clear Analytics",
        description: "Get instant feedback on every send.",
      },
      {
        icon: "Sparkle",
        title: "Designed for Growth",
        description: "Easy onboarding. Beautiful results.",
      },
    ],
  },
  features: {
    eyebrow: "Features",
    heading: "Why Choose MailBeam?",
    subtitle: "",
    items: [
      {
        icon: "MailPlus",
        title: "Simple Campaign Builder",
        description: "Design, schedule, and send email campaigns in just a few clicks.",
      },
      {
        icon: "Users",
        title: "Manage Your Subscribers",
        description: "Organize and segment your email lists for targeted outreach.",
      },
      {
        icon: "BarChart",
        title: "Actionable Analytics",
        description: "Track open rates, clicks, and performance to optimize your results.",
      },
    ],
  },
  services: {
    eyebrow: "Services",
    heading: "All-in-One Platform",
    subtitle: "The easiest way to create, send, and analyze campaigns.",
    items: [
      {
        title: "Campaigns",
        description: "Plan and send branded email to your contacts.",
        pro: false,
      },
      {
        title: "Subscriber Management",
        description: "Grow your list and keep it organized.",
        pro: false,
      },
      {
        title: "Analytics",
        description: "See the real impact of your email marketing.",
        pro: false,
      },
      {
        title: "Easy Onboarding",
        description: "Get started in minutes, not days.",
        pro: false,
      },
    ],
  },
  testimonials: {
    eyebrow: "Clients",
    heading: "What Our Customers Say",
    reviews: [
      {
        image: "/team1.jpg",
        name: "Sarah",
        role: "Boutique Owner",
        comment: "“MailBeam made launching my first campaign so easy. Highly recommend!”",
        rating: 5,
      },
      {
        image: "/team2.jpg",
        name: "Mark",
        role: "Agency Founder",
        comment: "“We love the simple dashboard and clear reports.”",
        rating: 5,
      },
    ],
  },
  team: {
    eyebrow: "Team",
    heading: "Meet the MailBeam Team",
    members: [],
  },
  pricing: {
    eyebrow: "Pricing",
    heading: "Fair Pricing",
    subtitle: "Start free. Scale as you grow.",
    priceSuffix: "/month",
    plans: [
      {
        title: "Starter",
        popular: false,
        price: 0,
        description: "Personal projects and simple campaigns.",
        buttonText: "Get Started Free",
        benefits: [
          "Unlimited emails",
          "Up to 500 subscribers",
          "Campaign builder",
          "Basic analytics",
        ],
      },
      {
        title: "Pro",
        popular: true,
        price: 29,
        description: "For growing brands and businesses.",
        buttonText: "Try Pro Free",
        benefits: [
          "5,000 subscribers",
          "Advanced analytics",
          "Segmentation",
          "Priority support",
        ],
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    heading: "Connect With MailBeam",
    description:
      "Want to learn more? Reach out and our team will help you get started.",
    mailtoAddress: "chirag@bidx.ai",
    info: {
      address: { label: "Find us", value: "Remote" },
      phone: { label: "Call us", value: "" },
      email: { label: "Email us", value: "chirag@bidx.ai" },
      hours: { label: "Visit us", value: ["Monday - Friday", "9AM - 6PM"] },
    },
    formSubjects: ["Product Demo", "Support", "Partnership"],
    formSubmitLabel: "Send Inquiry",
  },
  faq: {
    eyebrow: "FAQ",
    heading: "Questions About MailBeam",
    items: [
      {
        question: "Is MailBeam free to start?",
        answer: "Yes, you can send your first campaigns for free.",
      },
      {
        question: "Who is MailBeam for?",
        answer: "Small businesses, agencies, and anyone who wants effective email marketing.",
      },
      {
        question: "Do I need coding skills to use MailBeam?",
        answer: "No, everything is no-code and simple.",
      },
    ],
  },
  footer: {
    brandName: "MailBeam",
    columns: [
      {
        heading: "Product",
        links: [
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "Contact", href: "#contact" },
        ],
      },
    ],
    copyright: "© MailBeam 2024. All rights reserved.",
    attribution: { label: "Built with Next.js", href: "https://nextjs.org" },
  },
  navbar: {
    brandName: "MailBeam",
    routes: [
      { href: "/#features", label: "Features" },
      { href: "/#pricing", label: "Pricing" },
      { href: "/#contact", label: "Contact" },
      { href: "/#faq", label: "FAQ" },
    ],
    featureDropdownLabel: "Features",
    featureImage: { src: "/hero-image-light.jpeg", alt: "MailBeam dashboard preview" },
    features: [
      {
        title: "Campaign Builder",
        description: "Create, design, and schedule your email marketing.",
      },
      {
        title: "Subscriber Management",
        description: "Import, grow and target your list—all in one place.",
      },
      {
        title: "Analytics",
        description: "Track campaign results and improve with data.",
      },
    ],
    signInLabel: "Sign In",
    signUpLabel: "Sign Up",
    dashboardLabel: "Dashboard",
    githubLink: { href: "#", ariaLabel: "View GitHub" },
  },
};

export const homeContent: HomeContent = defaultHomeContent;

export function getHomeContent(): HomeContent {
  return homeContent;
}