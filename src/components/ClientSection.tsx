import React from "react";

import { Carousel, Typography } from "@material-tailwind/react";
import { LoremIpsum } from "react-lorem-ipsum";

export function ClientSection() {
  return (
    <div className="h-48 sm:h-64 md:h-80 lg:h-96 overflow-hidden">
      <Carousel className="rounded-xl" placeholder={undefined}>
        <div className="relative h-full w-full">
          <img
            src="/images/alteryx.jpg"
            alt="image 1"
            className="h-full w-full object-cover carousel-img"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                placeholder={undefined}
              >
                Alteryx
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-8 opacity-80 text-1xl md:text-2xl lg:text-3xl "
                placeholder={undefined}
              >
                Tady bude text, ale nesmí být moc dlouhý
              </Typography>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src="/images/broadcom.jpg"
            alt="image 1"
            className="h-full w-full object-cover carousel-img"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                placeholder={undefined}
              >
                Broadcom
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-8 opacity-80 text-1xl md:text-2xl lg:text-3xl "
                placeholder={undefined}
              >
                ...protože pak to dělá kraviny
              </Typography>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
