"use client";
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { usePrevNextButtons } from "@/components/EmbalaCarouselArrowButton";
import "@/styles/embala.css";
import { movies } from "@/constants";
import Image from "next/image";
import Rating from "./Rating";
import Link from "next/link";

interface IShowcase {
  title: string;
  type: string;
}

const Showcase = ({ title, type }: IShowcase) => {
  const OPTIONS: EmblaOptionsType = { align: "start" };
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);
  return (
    <section className="py-6 even:bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="header mb-4 flex items-center justify-between">
          <div className="title">
            <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              disabled={prevBtnDisabled}
              className="rounded-md bg-slate-100 p-1 text-slate-600 transition-all hover:bg-sky-500 hover:text-white disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-slate-300"
              onClick={onPrevButtonClick}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              disabled={nextBtnDisabled}
              className="rounded-md bg-slate-100 p-1 text-slate-600 transition-all hover:bg-sky-500 hover:text-white disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-slate-300"
              onClick={onNextButtonClick}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
        <div className="embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {movies.slice(1, -1).map((movie, index) => (
                <div className="embla__slide" key={index}>
                  <div className="relative w-full overflow-hidden rounded-md">
                    <Link href={`/${type}/${movie.id}`}>
                      <Image
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        width={160}
                        height={220}
                        alt={movie.original_title}
                        className="w-full"
                      />
                    </Link>
                    <div className="absolute bottom-0 left-0 h-14 w-full bg-gradient-to-b from-transparent to-black/80 p-4">
                      <Rating rating={movie.vote_average} />
                    </div>
                  </div>
                  <div className="box py-1">
                    <Link
                      className="mb-0.5 truncate font-semibold text-slate-900"
                      href={`/${type}/${movie.id}`}
                    >
                      {movie.title}
                    </Link>
                    <p className="text-sm text-slate-600">
                      {movie.release_date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
