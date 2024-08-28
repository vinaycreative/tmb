import React from "react";
import Link from "next/link";
import { Heart } from "lucide-react";
import FoorImage from "@/public/images/footer-logo.svg";
import MovieDB from "@/public/images/themoviedb.svg";

import Image from "next/image";

const Footer = () => {
  return (
    <footer
      className="z-10 mt-auto w-full border-t-2 border-slate-200 bg-white text-white"
      style={{
        background: `linear-gradient(rgba(255, 255, 255, 0.54) 0%, rgba(255, 255, 255, 0.89) 51.04%, rgb(255, 255, 255) 100%), url("./images/webb.png")`,
      }}
    >
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="col-span-1">
            <Image src={FoorImage} width={120} height={40} alt="footer-logo" />
          </div>
          <div className="col-span-2 flex flex-col items-start gap-4 md:flex-row">
            <div className="flex-1">
              <h3 className="mb-2 text-[15px] font-medium text-slate-600">
                Popular Genere
              </h3>
              <div className="text-[13px] font-light">
                <div className="flex flex-wrap gap-1.5 font-normal text-slate-400">
                  <Link
                    className="transition-color hover:text-sky-500"
                    href="/genre/28/movie"
                  >
                    Action
                  </Link>
                  <Link
                    className="transition-color hover:text-sky-500"
                    href="/genre/12/movie"
                  >
                    Adventure
                  </Link>
                  <Link
                    className="transition-color hover:text-sky-500"
                    href="/genre/16/movie"
                  >
                    Animation
                  </Link>
                  <Link
                    className="transition-color hover:text-sky-500"
                    href="/genre/35/movie"
                  >
                    Comedy
                  </Link>
                  <Link
                    className="transition-color hover:text-sky-500"
                    href="/genre/80/movie"
                  >
                    Crime
                  </Link>
                  <Link
                    className="transition-color hover:text-sky-500"
                    href="/genre/99/movie"
                  >
                    Documentary
                  </Link>
                  <Link
                    className="transition-color hover:text-sky-500"
                    href="/genre/10751/movie"
                  >
                    Family
                  </Link>
                  <Link
                    className="transition-color hover:text-sky-500"
                    href="/genre/14/movie"
                  >
                    Fantasy
                  </Link>
                  <Link
                    className="transition-color hover:text-sky-500"
                    href="/genre/36/movie"
                  >
                    History
                  </Link>
                  <Link
                    className="transition-color hover:text-sky-500"
                    href="/genre/27/movie"
                  >
                    Horror
                  </Link>
                  <Link
                    className="transition-color hover:text-sky-500"
                    href="/genre/10402/movie"
                  >
                    Music
                  </Link>
                  <Link
                    className="transition-color hover:text-sky-500"
                    href="/genre/9648/movie"
                  >
                    Mystery
                  </Link>
                  <Link
                    className="transition-color hover:text-sky-500"
                    href="/genre/10749/movie"
                  >
                    Romance
                  </Link>
                  <Link
                    className="transition-color hover:text-sky-500"
                    href="/genre/878/movie"
                  >
                    Science Fiction
                  </Link>
                  <Link
                    className="transition-color hover:text-sky-500"
                    href="/genre/10752/movie"
                  >
                    War
                  </Link>
                  <Link
                    className="transition-color hover:text-sky-500"
                    href="/genre/37/movie"
                  >
                    Western
                  </Link>
                </div>
              </div>
            </div>
            <div className="min-w-[16%]">
              <h3 className="mb-2 text-[15px] font-medium text-slate-600">
                Designed By
              </h3>
              <div className="text-[13px] font-light text-slate-400">
                <Link
                  href="https://www.vinaycreative.com/"
                  className="font-normal text-slate-400 transition-all hover:text-sky-500 hover:underline"
                  target="_blank"
                >
                  @ Vinay Bhadre
                </Link>
                <div className="">
                  <i className="ph ph-instagram-logo"></i>
                  <i className="ph ph-twitter-logo"></i>
                  <i className="ph ph-github-logo"></i>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="mb-2 text-[15px] font-medium text-slate-600">
                Credit
              </h3>
              <div className="body">
                <p className="text-[13px] font-light text-slate-400">
                  Special thanks to{" "}
                  <Link
                    className="font-normal text-sky-500"
                    target="_blank"
                    href="//www.themoviedb.org/"
                  >
                    The Movie Database (TMDb)
                  </Link>{" "}
                  for their excellent API, which powers our movie and TV show
                  data.
                </p>
              </div>
            </div>
            <div className="">
              <div className="body">
                <Link target="_blank" href="//www.themoviedb.org/">
                  <Image
                    src={MovieDB}
                    width={100}
                    height={30}
                    alt="themoviedb"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-sky-900 py-3 text-[13px] font-light text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
            <p>© 2024 TheMovieBase, All rights reserved.</p>
            <div className="inline-flex items-center gap-[3px]">
              Made with
              <Heart
                size={16}
                className="mx-[2px] text-white"
                fill="white"
              />{" "}
              By
              <Link
                href="https://www.vinaycreative.com/"
                className="font-normal text-sky-500 transition-all hover:underline"
                target="_blank"
              >
                Vinay
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <p>Tearm and Condition</p>
              <span>|</span>
              <p>Privacy Policy</p>
              <span>|</span>
              <p>FAQ</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
