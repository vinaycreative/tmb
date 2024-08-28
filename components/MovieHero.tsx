import { Movie } from "@/types";
import Image from "next/image";
import React from "react";
import Rating from "./Rating";
import Link from "next/link";
import { CalendarDays, Clock3 } from "lucide-react";
import { movieTime } from "@/lib/utils";

interface IMovieHero {
  data: Movie;
  type: string;
}

const MovieHero = ({ data, type }: IMovieHero) => {
  return (
    <div
      className="flex w-full items-center bg-black py-12"
      style={{
        background: `linear-gradient(89.9deg, rgb(0, 0, 0) 49.99%, rgba(0, 0, 0, 0) 99.91%) center center / cover, url('https://image.tmdb.org/t/p/original${data.backdrop_path}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-8">
          <div className="hidden min-h-[470px] w-[320px] overflow-hidden rounded-md border-2 border-white md:block">
            <Image
              src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
              width={320}
              height={100}
              alt={data.original_title}
            />
          </div>
          <div className="flex-1 text-white">
            <Rating rating={data.vote_average} />
            <h2 className="mb-1 mt-2 text-3xl font-semibold">
              {type == "show" ? data.name : data.title}
            </h2>
            <div className="mb-2 flex items-center gap-2 text-sm">
              {data.genres.map((item, index) => {
                return (
                  <Link key={index} href={`/genere/`}>
                    {item.name}
                  </Link>
                );
              })}
            </div>
            <div className="mb-3 flex items-center gap-1.5 text-[15px] text-white">
              <Clock3 size={16} />
              <p>{movieTime(data.runtime)}</p>
              <span className="mx-1">|</span>
              <CalendarDays size={16} />
              <p>{type == "show" ? data.first_air_date : data.release_date}</p>
            </div>
            <h3 className="mb-1 font-medium">Overview</h3>
            <p className="mb-4 w-full text-sm text-slate-400 md:w-[70%] md:text-[15px]">
              {data.overview}
            </p>

            <div className="mb-5">
              <h3>Director</h3>
              <p>{data.director && data.director.name}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieHero;
