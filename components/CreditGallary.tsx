"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, SquareUserRound } from "lucide-react";
import { cast } from "@/constants";
import Image from "next/image";
import Link from "next/link";
const NoImage = "/images/no-image.jpg";
import { motion } from "framer-motion";

const CreditGallary = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  return (
    <div className="div">
      <div className="header mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div className="flex flex-1 items-center justify-between md:gap-4">
          <h1 className="text-xl font-semibold text-slate-800">
            Casting Actors
          </h1>
          <Tabs defaultValue="cast" className="w-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="cast">Cast</TabsTrigger>
              <TabsTrigger value="crew">Crew</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <SearchInput searchValue={searchTerm} setValue={setSearchTerm} />
      </div>
      <div className="min-[500px] grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-6">
        {cast
          .filter(
            (i) =>
              i.name.toLowerCase().includes(searchTerm) ||
              i.character.toLowerCase().includes(searchTerm),
          )
          .map((item, index) => {
            return (
              <motion.div
                layout
                initial={{ opacity: 0, translateY: 10 }}
                animate={{ opacity: 1, translateY: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                whileHover={{ translateY: -10 }}
                className="group"
                key={item.id}
              >
                <div className="w-full overflow-hidden rounded-md">
                  <Link href={`/actor/${item.id}`}>
                    <motion.img
                      src={
                        item.profile_path
                          ? `https://image.tmdb.org/t/p/w500/${item.profile_path}`
                          : NoImage
                      }
                      width={160}
                      height={220}
                      alt={item.name}
                      className="w-full"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </div>
                <div className="box py-1">
                  <Link
                    className="mb-0.5 truncate font-semibold text-slate-900 transition-all group-hover:text-sky-500"
                    href={`/actor/${item.id}`}
                  >
                    {item.name}
                  </Link>
                  <p className="text-sm font-normal text-slate-400">
                    {item.character}
                  </p>
                </div>
              </motion.div>
            );
          })}
      </div>
      {!cast.filter(
        (i) => i.name.includes(searchTerm) || i.character.includes(searchTerm),
      ).length && (
        <div className="flex h-[200px] w-full items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-2">
            {/* <div className="inline-block rounded-full bg-slate-100 p-2">
              <SquareUserRound size={32} className="text-slate-500" />
            </div> */}
            <h3 className="text-lg font-semibold">Oops!</h3>
            <p className="text-sm text-slate-600">
              We couldn't find the{" "}
              <span className="text-[15px] font-medium text-sky-500">
                `{searchTerm}`
              </span>{" "}
              actor you're looking for.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

interface SearchInputProps {
  searchValue: string;
  setValue: (value: string) => void;
}

const SearchInput = ({ searchValue, setValue }: SearchInputProps) => {
  return (
    <div className="relative flex h-10 w-full items-center md:w-[300px]">
      <div className="absolute left-3">
        <Search size={16} className="text-slate-400" />
      </div>
      <input
        type="text"
        className="h-full w-full rounded-md py-1 pl-9 pr-4 text-[15px] text-slate-700 outline-none"
        value={searchValue}
        onChange={(e) => setValue(e.target.value.toLowerCase())}
        placeholder="Search by name..."
      />
    </div>
  );
};
export default CreditGallary;
