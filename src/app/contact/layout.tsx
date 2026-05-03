import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Free Estimate",
  description:
    "Book your free design consultation — normally $299, free for new clients. Construction Station serves the Inland Empire. Call 909-797-6333 or fill out our estimate form.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
