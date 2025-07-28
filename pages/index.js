import Hero from "@/Components/Hero";
import Impact from "@/Components/Impact";
import Innovate from "@/Components/Innovate";
import Strive from "@/Components/Innovate/index_v2";
import LenisDiv from "@/Components/LenisDiv";
import Difference from "@/Components/LoopSlider/index_v2";
import OurTeam from "@/Components/OurTeam";
import Our_Clients from "@/Components/Our_Clients";
import ServiceSection from "@/Components/Our_Service/index_v2";
import Quote from "@/Components/Quote";

export default function Home() {
  return (
    <>
      <LenisDiv>
        <Hero />
        <Difference />
        <Strive />
        <OurTeam />
        <Innovate />
        <ServiceSection />

        <Impact />

        <Our_Clients />
        <Quote />
      </LenisDiv>
    </>
  );
}
