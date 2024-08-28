import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";

export default function Home() {
  return (
    <>
      <Hero />
      <Showcase title="Popular movies" type="movie" />
      <Showcase title="Popular tv shows" type="tv" />
    </>
  );
}
