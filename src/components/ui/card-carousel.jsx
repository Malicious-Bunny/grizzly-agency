"use client"

import React from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { SparklesIcon } from "lucide-react"
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules"

import { Badge } from "@/components/ui/badge"

export const CardCarousel = ({
  images,
  autoplayDelay = 3000,
  showPagination = true,
  showNavigation = false,
}) => {
  const css = `
  .swiper {
    width: 100%;
    padding-bottom: 50px;
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    height: 400px;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper-3d .swiper-slide-shadow-left {
    background-image: none;
  }
  .swiper-3d .swiper-slide-shadow-right{
    background: none;
  }

  .swiper-pagination-bullet {
    background: #fff;
    opacity: 0.5;
  }

  .swiper-pagination-bullet-active {
    background: #fff;
    opacity: 1;
  }
  `

  return (
    <section className="w-full py-4">
      <style>{css}</style>
      <div className="w-full bg-neutral-950 lg:rounded-4xl">
        <div className="relative mx-auto flex w-full max-w-7xl flex-col p-8 lg:py-20">


          <div className="mb-8 pt-12">
            <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              We have worked with hundreds of amazing people
            </h2>
            <p className="mt-4 text-center text-lg text-neutral-300">
              Discover what our clients say about working with Grizzly Agency
            </p>
          </div>

          <div className="flex w-full items-center justify-center">
            <div className="w-full">
              <Swiper
                spaceBetween={50}
                autoplay={{
                  delay: autoplayDelay,
                  disableOnInteraction: false,
                }}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
                }}
                pagination={showPagination ? {
                  clickable: true,
                  dynamicBullets: true,
                } : false}
                navigation={
                  showNavigation
                    ? {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                      }
                    : false
                }
                modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative h-full w-full overflow-hidden rounded-2xl">
                      <Image
                        src={image.src}
                        width={300}
                        height={400}
                        className="h-full w-full object-cover grayscale"
                        alt={image.alt}
                      />
                      {/* Quote overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <blockquote className="text-lg font-medium leading-relaxed text-center">
                          "{image.quote}"
                        </blockquote>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
