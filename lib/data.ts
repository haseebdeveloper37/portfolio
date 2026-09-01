import Image, { StaticImageData } from 'next/image';
import eutonia from '../assets/eutonia-home-1.webp'
import emsnow from '../assets/emsnow.webp'
import fardis from '../assets/fardis.webp'
import crosswranch from '../assets/cross-wranch.webp'// ---------------------------------------------------------------------------
// Site content lives here so it's easy to edit without touching components.
// ---------------------------------------------------------------------------

export type Project = {
  slug: string;
  category: string; // filter tags, space separated: e.g. "wordpress elementor"
  categoryLabel: string; // display label, e.g. "WordPress · Elementor"
  title: string;
  desc: string;
  tech: string[];
  href: string;
  // Placeholder image — swap this for your real project screenshot later.
  // Just replace the `image` value with a path like "/projects/my-project.jpg"
  // (put the file in the /public/projects folder) or any image URL.
  image: string | StaticImageData; 
};

export const projects: Project[] = [
  {
    slug: "eutonia-for-dancers ",
    category: "wordpress elementor",
    categoryLabel: "WordPress · Elementor",
    title: "Eutonia for Dancers",
    desc: "Eutonia For Dancers is a somatic movement program. It is not a dance class or therapy. It is a live, embodied practice of listening to the silence of the inner space.",
    tech: ["WordPress", "Gutenberg", "PHP", "Stripe", "Airtable integration", "Zapier integration" ],
    href: "https://eutoniafordancers.com/",
    image: eutonia,
  },
  {
    slug: "emsnow",
    category: "wordpress",
    categoryLabel: "WordPress",
    title: "EMS NOW",
    desc: "EMSNOW is the recognized preeminent news site for the global electronics manufacturing services (EMS) industry. ",
    tech: ["Elementor", "Html", "CSS", "JavaScript", "PHP", "Adsaniy Plugin"],
    href: "https://www.emsnow.com/",
    image: emsnow,
  },
  {
    slug: "fardis",
    category: "woocommerce wordpress",
    categoryLabel: "WooCommerce",
    title: "Fardis",
    desc: "Since 1967, international brand Fardis, has designed and supplied luxury wallpapers and fabrics to discerning clients. Originally inspired by the arts",
    tech: ["Elementor", "Custom Shortcodes", "Woocommerce"],
    href: "https://fardis.editstage.com/",
    image: fardis,
  },
  {
    slug: "Crosswranch",
    category: "plugin wordpress",
    categoryLabel: "WooCommerce",
    title: "Crosswranch",
    desc: "Cross W Ranch is a family-owned and operated ranch committed to raising grass-fed animals on certified organic pastures while nurturing the land and supporting the community we call home.",
    tech: ["Elementor", "Custom Shortcodes", "Woocommerce"],
    href: "https://crosswranch.com/",
    image: crosswranch,
  }
];

export const projectFilters = [
  { label: "All", value: "all" },
  { label: "WordPress", value: "wordpress" },
  { label: "WooCommerce", value: "woocommerce" },
  // { label: "Custom Plugin", value: "plugin" },
];

export type Service = {
  title: string;
  desc: string;
  href: string;
  icon: string; // key into the ServiceIcon component
};

export const services: Service[] = [
  {
    title: "WordPress Development",
    desc: "Custom WordPress websites, themes, plugins, integrations and advanced functionality.",
    href: "#",
    icon: "globe",
  },
  {
    title: "Custom Plugin Development",
    desc: "Scalable WordPress plugins tailored to specific business requirements.",
    href: "#",
    icon: "grid",
  },
  {
    title: "Website Design",
    desc: "Modern, responsive and conversion-focused website interfaces.",
    href: "#contact",
    icon: "pen",
  },
  {
    title: "Elementor Development",
    desc: "Advanced Elementor websites, custom widgets, dynamic layouts and integrations.",
    href: "#",
    icon: "layout",
  },
  {
    title: "React & Next.js Development",
    desc: "Modern React and Next.js websites and web applications with scalable component architecture.",
    href: "#",
    icon: "chevrons",
  },
  {
    title: "WooCommerce Development",
    desc: "Custom WooCommerce stores, checkout solutions, product functionality and integrations.",
    href: "#",
    icon: "cart",
  },
  {
    title: "SEO & Performance",
    desc: "Technical SEO, Core Web Vitals, website speed optimization and performance improvements.",
    href: "#",
    icon: "search",
  },
  {
    title: "Digital Marketing",
    desc: "SEO-focused content strategies, landing pages and digital growth solutions.",
    href: "#contact",
    icon: "megaphone",
  },
];

export const skills: { name: string; pct: number }[] = [
  { name: "WordPress", pct: 96 },
  { name: "PHP", pct: 88 },
  { name: "JavaScript", pct: 90 },
  { name: "React.js", pct: 82 },
  { name: "Next.js", pct: 78 },
  { name: "HTML5", pct: 94 },
  { name: "CSS3", pct: 92 },
  { name: "MySQL", pct: 80 },
  { name: "WooCommerce", pct: 90 },
  { name: "Elementor", pct: 93 },
  { name: "Divi", pct: 85 },
  { name: "WPBakery", pct: 83 },
  { name: "Gutenberg", pct: 88 },
  { name: "REST API", pct: 86 },
  { name: "Git", pct: 87 },
  { name: "GitHub", pct: 87 },
  { name: "SEO", pct: 84 },
  { name: "Google Analytics", pct: 79 },
];

export const processSteps = [
  {
    num: "01 — Discover",
    title: "Understand the goal",
    desc: "Understand the business, goals and requirements before any design or code begins.",
  },
  {
    num: "02 — Plan",
    title: "Set the strategy",
    desc: "Create the technical and UI/UX strategy the build will follow.",
  },
  {
    num: "03 — Design",
    title: "Design the interface",
    desc: "Build a modern, conversion-focused interface grounded in the brand.",
  },
  {
    num: "04 — Develop",
    title: "Build it properly",
    desc: "Develop the website using clean, scalable and well-documented code.",
  },
  {
    num: "05 — Test",
    title: "Test everything",
    desc: "Test responsiveness, performance, functionality and cross-browser compatibility.",
  },
  {
    num: "06 — Launch",
    title: "Launch & optimize",
    desc: "Deploy, monitor and continuously improve the site after launch.",
  },
];

export type BlogPost = {
  slug: string;
  cat: string;
  readTime: string;
  date?: string;
  title: string;
  desc: string;
  image: string;
  featured?: boolean;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "gutenberg-custom-blocks-react",
    cat: "WordPress",
    readTime: "9 min read",
    date: "Aug 12, 2026",
    title: "Building Custom Gutenberg Blocks with React: A Practical Guide",
    desc: "A walkthrough of building production-ready custom blocks, from block.json to dynamic server-side rendering — with the pitfalls I hit along the way.",
    image: "https://picsum.photos/seed/blog-gutenberg/900/500",
    featured: true,
  },
  {
    slug: "woocommerce-checkout-performance",
    cat: "WooCommerce",
    readTime: "6 min",
    title: "Speeding Up WooCommerce Checkout Without Breaking Plugins",
    desc: "Practical, low-risk changes that cut checkout load time on real client stores.",
    image: "https://picsum.photos/seed/blog-woocommerce/600/400",
  },
  {
    slug: "nextjs-headless-wordpress",
    cat: "Next.js",
    readTime: "11 min",
    title: "Going Headless: WordPress as a Content API for Next.js",
    desc: "What actually breaks when you move a WordPress site to a headless Next.js front end.",
    image: "https://picsum.photos/seed/blog-nextjs/600/400",
  },
  {
    slug: "core-web-vitals-wordpress",
    cat: "Performance",
    readTime: "7 min",
    title: "Fixing Core Web Vitals on Image-Heavy WordPress Sites",
    desc: "A repeatable checklist for LCP and CLS issues on content-heavy pages.",
    image: "https://picsum.photos/seed/blog-vitals/600/400",
  },
];

export const navLinks = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  // { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];
