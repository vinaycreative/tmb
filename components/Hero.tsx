import React from "react";
import Rating from "@/components/Rating";
import { genres } from "@/constants";

const Hero = () => {
  const movie = {
    adult: false,
    backdrop_path: "/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg",
    genre_ids: [28, 35, 878],
    id: 533535,
    original_language: "en",
    original_title: "Deadpool & Wolverine",
    overview:
      "A listless Wade Wilson toils away in civilian life with his days as the morally flexible mercenary, Deadpool, behind him. But when his homeworld faces an existential threat, Wade must reluctantly suit-up again with an even more reluctant Wolverine.",
    popularity: 5464.692,
    poster_path: "/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
    release_date: "2024-07-24",
    title: "Deadpool & Wolverine",
    video: false,
    vote_average: 7.763,
    vote_count: 2422,
  };
  return (
    <div
      className="flex min-h-[600px] w-full items-end"
      style={{
        objectFit: "contain",
        background: `linear-gradient(rgba(0, 0, 0, 0) 30%, rgb(255, 255, 255) 100%) center top / cover, url(http://image.tmdb.org/t/p/original/${movie.backdrop_path}), no-repeat`,
        backgroundPosition: "center top",
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto mb-10">
        <Rating rating={movie.vote_average} className="mb-2 bg-black" />
        <h1 className="mb-2 mt-auto text-2xl font-bold text-slate-950 md:text-4xl">
          {movie.title}
        </h1>
        <p className="w-full text-sm text-slate-800 md:w-[60%]">
          {movie.overview}
        </p>
        <div className="my-4 h-[1px] w-full bg-slate-900 md:w-[60%]"></div>
        <div className="flex items-center justify-between text-sm md:max-w-[30%]">
          <div className="item">
            <h2 className="font-semibold text-slate-900">Duration</h2>
            <p className="text-slate-600">1hr 30min</p>
          </div>
          <div className="item">
            <h2 className="font-semibold text-slate-900">Realese Date</h2>
            <p className="text-slate-600">2024</p>
          </div>
          <div className="item">
            <h2 className="font-semibold text-slate-900">Director</h2>
            <p className="text-slate-600">Shawn Levy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
