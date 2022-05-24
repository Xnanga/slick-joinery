import VideoSection from "../components/sections/VideoSection";
import ServicesHighlightSection from "../components/sections/ServicesHighlightsSection";

export default function Home() {
  return (
    <>
      <VideoSection
        titleText={"Scotland's Premier Joiners"}
        taglineText={"Whatever the job, big or small, we have you covered."}
        buttonText="Give us ring"
        videoSrc="../video/man-sawing-wood.webm"
      />
      <ServicesHighlightSection title={"Popular Services"} />
    </>
  );
}
