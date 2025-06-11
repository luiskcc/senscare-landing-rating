import Header from "./Header";
import FeedbackForm from "./FeedbackForm";

export const metadata = {
  title: "SensCare Spa - Feedback",
  description: "SensCare Spa - Feedback",
  icons: {
    icon: "/senscare-favicon.ico",
  },
  openGraph: {
    title: "SensCare Spa - Feedback",
    description: "SensCare Spa - Feedback",
    images: "/senscare-logo.svg",
  },
  twitter: {
    card: "summary_large_image",
    title: "SensCare Spa - Feedback",
    description: "SensCare Spa - Feedback",
    images: "/senscare-logo.svg",
  },
  alternates: {
    canonical: "https://senscarespa.com/feedback",
  },

  favicon: {
    icon: "/senscare-favicon.ico",
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
