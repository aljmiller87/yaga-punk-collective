import FullWidthImageContent from "@/components/FullWidthImageContent";
import Hero from "@/components/Hero";
import MeetEmma from "@/views/home/MeetEmma";
import Issues from "@/views/home/issues";
import Footer from "@/components/Footer";
import "../styles/theme.css";

export default function Home() {
  return (
    <>
      <Hero />
      <MeetEmma />
      <FullWidthImageContent />
      <Issues />
    </>
  );
}
