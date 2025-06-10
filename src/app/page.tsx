import Image from "next/image";
import Header from "./Header";
import Footer from "./Footer";
import FeedbackForm from "./FeedbackForm";

export default function Home() {
  return (
    <div>
      <Header />
      <FeedbackForm />
      <Footer />
    </div>
  );
}
