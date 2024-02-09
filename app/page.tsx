import Categories from "@/components/cards/Categories";
import HomeHero from "@/components/sections/HomeHero";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="h-full  max-w-6xl mx-auto text-center">
      <HomeHero />
      <div className="flex justify-center items-center mx-auto flex-col w-fit gap-4">
        <h1 className="mt-16 mb text-3xl lg:text-4xl px-6 mx-auto text-secondary-foreground font-sans font-bold self-center">
          Product Categories
        </h1>
        <Separator className=" w-[70%] mx-auto h-1 bg-primary/30" />
      </div>

      <Categories />
    </div>
  );
}
