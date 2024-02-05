import Image from "next/image";
import linesHomeBg from "@/public/linesHomeBg.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HomeHero = () => {
  return (
    <div className="flex justify-center mt-16 max-w-6xl mx-auto h-screen">
        <div className="bg-primary-foreground w-full h-[50%] mx-6  rounded-3xl relative overflow-hidden ">
          <Image
            alt="home page hero img"
            src={linesHomeBg}
            className="w-full h-full "
          />
          <div className="flex justify-around flex-col items-center top-0 right-0 bottom-0 left-0 m-auto absolute z-10 gap-5 lg:gap-8 bg-secondary/50 md:h-fit md:w-[90%] w-[80%] h-[80%] p-10 rounded-3xl ">
            <h1 className="text-3xl md:text-5xl   text-center px-2 text-white font-semibold font-sans   ">
              Get The Latest And The Best Products From ሱቅ።
            </h1>
            <Link href="./shop">
              <Button variant={"outline"} size={"lg"} className="md:text-xl text-lg">
                Shop Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
  )
}

export default HomeHero