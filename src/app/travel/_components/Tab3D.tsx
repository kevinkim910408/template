"use client";

import { EarthCanvas, FixedLight, Polaroid } from ".";
import { FadeIn } from "@/components/animation";
import {
  Button,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Icon,
} from "@/components/ui";
import { travelCityNameState, travelPolaroidState } from "@/recoils";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Autoplay from "embla-carousel-autoplay";
import { useRecoilState, useRecoilValue } from "recoil";

export const Tab3D = ({
  setSelectedTab,
}: {
  setSelectedTab: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [polaroidOpen, setPolaroidOpen] = useRecoilState(travelPolaroidState);
  const cityName = useRecoilValue(travelCityNameState);

  return (
    <div className="flex flex-col items-center w-full">
      <FadeIn
        isVisible={polaroidOpen}
        className={`flex justify-center relative ${polaroidOpen ? "z-10" : ""}`}
      >
        <div
          className={`absolute flex flex-col justify-center items-center w-[700px] h-96 bg-white dark:bg-black `}
        >
          {cityName}
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
            className="w-11/12"
          >
            <CarouselContent>
              {Array.from({ length: 10 }).map((_, index) => (
                <CarouselItem key={index} className="basis-1/2">
                  <div className="p-1">
                    <Polaroid
                      caption="Taco"
                      imageUrl="data:image/jpeg;base64,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"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <Icon
            name="Cross1Icon"
            onClick={() => setPolaroidOpen(false)}
            className="absolute top-8 right-8"
          />
        </div>
      </FadeIn>
      <div className="flex justify-center">
        <div className="hidden md:block w-[850px] h-[850px] ">
          <Canvas
            camera={{ fov: 25, near: 0.1, far: 100, position: [1, 4, 4] }}
          >
            <FixedLight />
            <EarthCanvas />
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>
        <div className="flex flex-col items-center gap-2 md:hidden">
          <div>3D is only for PC or some tablets, please move to 2D</div>
          <Button className="w-32" onClick={() => setSelectedTab("2D")}>
            Go to 2D
          </Button>
        </div>
      </div>
    </div>
  );
};
