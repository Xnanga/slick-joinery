import VideoSection from "../components/sections/VideoSection";
import ServicesHighlightSection from "../components/sections/ServicesHighlightsSection";

export default function Home() {
  return (
    <>
      <VideoSection
        titleText={"Scotland's Premier Joiners"}
        taglineText={"Whatever the job, big or small, we have you covered."}
        buttonText="Give us ring"
        videoSrc="../video/stock-video.webm"
      />
      <ServicesHighlightSection />
    </>
  );
}
