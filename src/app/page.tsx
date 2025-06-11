import Header from "./Header";
import FeedbackForm from "./FeedbackForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://senscarespa.com'),
  title: "SensCare Spa - Feedback",
  description: "SensCare Spa - Feedback",
  icons: {
    icon: "/senscare-favicon.ico",
  },
  openGraph: {
    title: "SensCare Spa - Feedback",
    description: "SensCare Spa - Feedback",
    images: "/og-image.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "SensCare Spa - Feedback",
    description: "SensCare Spa - Feedback",
    images: "/og-image.png",
  },
  alternates: {
    canonical: "https://senscarespa.com/feedback",
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
  },
}

export default function Home() {
  return (
    <div>
      <Header />
      <FeedbackForm />
    </div>
  );
}
