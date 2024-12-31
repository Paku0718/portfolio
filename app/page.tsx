import Container from "@/components/Container";
import Photo from "@/components/Photo";
import SocialLinks from "@/components/SocialLinks";
import Statistics from "@/components/Statistics";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-bodyColor text-white/80">
      <Container className="py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col items-center md:items-start gap-5 md:gap-7 text-center md:text-start">
          <div>
            <h3 className="font-semibold tracking-wider mb-1">
              Software Engineer
            </h3>
            <h2 className="text-3xl md:text-5xl mb-2 text-white">
              Hello I&apos;m
            </h2>
            <h1 className="text-5xl text-lightSky md:text-7xl tracking-normal">
              Paras Kuranjekar
            </h1>
          </div>
          <p className="w-auto md:max-w-[500px] text-white/50 font-thin leading-6">
            I design and build scalable software solutions, develop robust
            backend systems, solve complex problems, and create intuitive user
            experiences. Passionate about turning ideas into functional and
            impactful applications using modern technologies.
          </p>
          <Button className="bg-transparent rounded-full border border-lightSky/50 text-lightSky hover:bg-hoverColor hover:text-black hoverEffect h-11">
            Download CV
            <Download />
          </Button>
          <SocialLinks/>
          <Statistics/>
        </div>
        {/* Photo */}
        <Photo/>
      </Container>
    </div>
  );
}
