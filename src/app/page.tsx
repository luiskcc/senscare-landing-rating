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

  og: {
    title: "SensCare Spa - Feedback",
    description: "SensCare Spa - Feedback",
    images: "/og-image.png",
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
